<template>
  <div class="item_wrapper">
    <div class="item_img">
      <img :src="activPD.photos[0]" alt="" />
    </div>
    <div class="pi_price_box">
      <div class="item_price" :title="`Перейти на страницу ${name}`">
        <!-- onClick={goToProduct} -->
        {{ activPD?.price }} ₽
      </div>
    </div>
    <div class="item_title">
      <!-- title={`Перейти на страницу ${name}`}
          onClick={goToProduct} -->
      {{ name }}
    </div>
    <div className="item_pd_btnBar" v-if="ProductDefinations.length > 1">
      <div
        v-for="pd of ProductDefinations"
        @click="() => setActivePD(pd)"
        :class="
          pd.id === activPD.id
            ? 'pd_btn pd_btn_active'
            : 'pd_btn pd_btn_passive'
        "
        :key="pd.id"
      >
        <!-- onClick={() => choosePd(i)} -->
        {{ pd.name_variant }}
      </div>
    </div>
    {basketBtn}
  </div>
</template>

<script setup lang="ts">
import { TProductDefinationsBase } from "@/store";
import { TProduct } from "@/store";
import { PropType, defineProps, onUpdated, reactive, ref, toRefs } from "vue";

const props = defineProps({
  product: {
    type: Object as PropType<TProduct>,
    required: true,
  },
});

let {
  product: {
    value: { name, ProductDefinations },
  },
} = toRefs(props);
const activPD = ref(ProductDefinations[0]);
const setActivePD = (newActivPD: TProductDefinationsBase & { id: number }) => {
  activPD.value = newActivPD;
};
// const activPD = ProductDefinations[0];
onUpdated(() => {
  console.log(activPD);
});
</script>

<style scoped>
.item_wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item_img {
  width: 100%;
  height: 235px;
}
.item_img img {
  width: 100%;
  height: 100%;
}

.item_price {
  cursor: pointer;
}
.pi_price_box {
  margin-top: 10px;
  display: flex;
  align-items: center;
}
.pi_price_box > img {
  object-fit: contain;
  width: 8px;
  margin-left: 3px;
}

.item_title {
  margin-top: 10px;
  font-size: 18px;
  cursor: pointer;
}

.item_pd_btnBar {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* gap: 10px; */
}

.pd_btn {
  font-size: 12px;
  padding: 5px 15px;
  cursor: pointer;
  border-radius: var(--border-radius);
  border-right: 1px solid #d8d8d8;
}

.pd_btn_passive:hover {
  color: var(--color-forBtn);
}

.pd_btn_first {
  border-left: 1px solid #d8d8d8;
}

.pd_btn_active {
  background-color: var(--color-forBtn);
  color: var(--color-bg);
}

.item_basket {
  margin-top: 10px;
  width: 142px;
  height: 36px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: baseline;
  /* gap: 4px; */
  stroke: #000;
}

.item_basket > svg,
.item_basket_img > svg {
  width: 19px;
  height: 19px;
  margin-right: 4px;
}

.item_basket span {
  align-self: center;
}

.item_basket_active {
  background-color: var(--color-forBtn);
  color: #fff;
  stroke: #fff;
}
</style>
