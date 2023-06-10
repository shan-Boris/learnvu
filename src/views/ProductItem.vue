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
      <!-- :class="
          pd.id === activPD.id
            ? 'pd_btn pd_btn_active'
            : 'pd_btn pd_btn_passive'
        " -->
      <div
        v-for="pd of ProductDefinations"
        @click="setActivePD(pd)"
        :class="{
          'pd_btn pd_btn_active': pd.id === activPD.id,
          'pd_btn pd_btn_passive': pd.id !== activPD.id,
        }"
        :key="pd.id"
      >
        <!-- onClick={() => choosePd(i)} -->
        {{ pd.name_variant }}
      </div>
    </div>
    <div
      v-if="!store.getters.productsInOrder.find((v:any) => v.idPD === activPD.id)"
      title="Добавить в корзину"
      className="item_basket rose_btn"
      @click="addInBasket"
    >
      <svg viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17.4 5.69995L15.3 17.5999H3.69998L1.59998 5.69995H17.4Z"
          strokeMiterlimit="10"
        />
        <path
          d="M12.9 5.6999C12.9 3.5999 11.9 1.3999 9.49998 1.3999C7.09998 1.3999 6.09998 3.4999 6.09998 5.6999"
          strokeMiterlimit="10"
        />
      </svg>

      <span>В корзину</span>
    </div>
    <router-link
      to="/newOrder"
      v-else
      title="Перейти в корзину"
      className="item_basket rose_btn item_basket_active"
    >
      <div class="item_basket_img">
        <svg viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.4 5.69995L15.3 17.5999H3.69998L1.59998 5.69995H17.4Z"
            strokeMiterlimit="10"
          />
          <path
            d="M12.9 5.6999C12.9 3.5999 11.9 1.3999 9.49998 1.3999C7.09998 1.3999 6.09998 3.4999 6.09998 5.6999"
            strokeMiterlimit="10"
          />
        </svg>
      </div>

      <span>В корзине</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { TProductDefinationsBase } from "@/store";
import { TProduct, TProductInOrder } from "@/store";
import { PropType, defineProps, onUpdated, reactive, ref, toRefs } from "vue";
import { useStore } from "vuex";

// const basketBtn = orderStore.productsInOrder
//       .map((v) => v.idPD)
//       .includes(activPD?.id ?? 0) ? (
//       <Link to={"/newOrder"} title="Перейти в корзину">
//         <div className="item_basket rose_btn item_basket_active">
//           <div className="item_basket_img">{basketSVG}</div>
//           <span>В корзине</span>
//         </div>
//       </Link>
//     ) : (
//       <div
//         title="Добавить в корзину"
//         className="item_basket rose_btn"
//         onClick={addInBasket}
//       >
//         {basketSVG}

//         <span>В корзину</span>
//       </div>
//     );
const store = useStore();

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

const addInBasket = () => {
  const newProductsInOrder: (TProductInOrder & { idPD: number })[] = [
    ...store.getters.productsInOrder,
    {
      idPD: activPD.value.id,
      amount: 1,
      name,
      price: activPD.value.price,
    },
  ];
  store.dispatch("updateProductsInOrder", newProductsInOrder);
  console.log(
    !store.getters.productsInOrder.find((v: any) => {
      console.log(v.idPD);
      console.log(activPD.value.id);
      return v.id === activPD.value.id;
    })
  );
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
.rose_btn {
  border-radius: var(--border-radius);
  border: 1px solid var(--color-forBtn);
  -webkit-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
  padding: 7px;
  cursor: pointer;
}
</style>
