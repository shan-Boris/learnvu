<template>
  <div className="catalog_wrapper">
    <nav className="catalog_navBar">
      <ul>
        <li v-for="category in store.getters.allCategories" :key="category.id">
          <router-link :to="{ name: `catalog`, params: { id: category.id } }">
            {{ category.name }}
          </router-link>
        </li>
      </ul>
    </nav>
    <div className="catalog_content">
      <div
        className="catalog_productList"
        v-if="store.getters.allProducts.length"
      >
        <div className="productList_list">
          <div
            class="productList_item"
            v-for="product of store.getters.allProducts"
            :key="product.id"
          >
            <ProductItem :product="product" />
          </div>
        </div>
      </div>
      <div className="productList_list_noProduct" v-else>
        К сожалению, таких товаров нет :(
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUpdate, onMounted, onUpdated, defineEmits } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import ProductItem from "./ProductItem.vue";
const store = useStore();
const route = useRoute();
const emit = defineEmits<{
  (e: "setTitle", newTitle: string): void;
}>();

onMounted(async () => {
  store.dispatch("fetchCategories");
  emit("setTitle", "Все товары");
});
onBeforeUpdate(async () => {
  const categoryId = route.params.id === "all" ? undefined : route.params.id;

  const categoryName =
    typeof categoryId !== "undefined"
      ? store.getters.allCategories.find((v: any) => v.id === +`${categoryId}`)
          ?.name
      : "Все товары";
  if (store.getters.categoryId === categoryId) return;
  emit("setTitle", categoryName);
  await store.dispatch("fetchProducts", { categoryId });
});
</script>

<style scoped>
.productList_list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 235px);

  justify-content: space-around;
  grid-gap: 10px;
}

.productList_item {
  /* height: 300px; */
  /* border: 1px solid black; */
  padding-bottom: 10px;
}
.productList_list_noProduct {
  text-align: center;
  width: 100%;
  margin-top: 20px;
  font-size: 18px;
}

.catalog_wrapper {
  display: flex;
  /* padding: 0 5px; */
}

.catalog_navBar {
  /* margin-top: -5px; */
  text-align: left;
}
.catalog_navBar li {
  margin-top: 10px;
  white-space: nowrap;
}

.catalog_navBar a:link,
.catalog_navBar a:visited {
  color: #333333;
}

.catalog_content {
  margin: 10px 0 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.catalog_filterPanel {
  display: flex;
  align-items: flex-end;
  /* gap: 10px; */
  margin: 0 -5px;
}
.catalog_filterPanel > div {
  margin: 0 5px;
}
#filterPanel_searchInp {
  margin-top: -15px;
}

.filterPanel_btn {
  /* border-radius: 3px;
  border: 2px solid var(--color-forBtn);
  padding: 2px 30px; */
  display: flex;
  /* gap: 5px; */
}

.catalog_productList {
  margin-top: 10px;
  width: 100%;
}

div.filterPanel_btn {
  padding: 2px 7px;
}

.filterPanel_down {
  margin-left: 5px;
  width: 10px;
  height: 10px;
  filter: drop-shadow(0 1px 1px #1a1a1a);
  /* filter: drop-shadow(0 1px 1px var(--color-forBtn)); */
  /* stroke: #f0ede2; */
  stroke: #1a1a1a;
}

.rose_dropdown {
  position: relative;
}

.rose_dropdown-options {
  position: absolute;
  z-index: 5;
  background-color: var(--color-forTitle);
  white-space: nowrap;
  cursor: pointer;
}
.hide_dd {
  display: none;
}
.dd_option {
  padding: 3px 9px;
  border: 1px solid #ffffff38;
  transition: all 0.1s;
  border-radius: 3px;
}
/* .dd_option:hover {
  color: #fff;
  transform: scale(1.05);
  background-color: var(--color-forBtn);
} */

.dd_option_active,
div.rose_btn_activate {
  color: #fff;
  background-color: var(--color-forBtn);
}
.dd_options_custom_price {
  display: flex;
  align-items: center;
  /* gap: 3px; */
}

.dd_option_input {
  width: 54px;
  background-color: var(--color-forTitle);
  border-radius: 3px;
  border: 1px solid var(--color-forBtn);
  padding: 3px;
  font-size: 16px;
  margin: 0 2px;
}

.dd_option_input_ok {
  width: 20px;
  height: 20px;
  align-self: center;
  stroke: var(--color-forBtn);
  fill: var(--color-forTitle);
}
/* .dd_option_input_ok:hover {
  stroke: var(--color-forTitle);
} */
</style>
