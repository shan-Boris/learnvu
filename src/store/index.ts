import { createStore } from "vuex";

export type TCategory = {
  name: string;
  id: number;
};
export type TProduct = {
  id: number;
  name: string;
  is_archive: boolean;
  Category: {
    id: number;
    name: string;
  };
  ProductDefinations: (TProductDefinationsBase & { id: number })[];
};

export type TProductDefinationsBase = {
  name_variant: string;
  price: number;
  order_num: number;
  description?: string;
  photos: string[];
  is_need_del: boolean;
};
export type TState = {
  categories: TCategory[];
  categoryId?: string;
  products: TProduct[];
};

export default createStore<TState>({
  state: {
    categories: [],
    products: [],
    categoryId: undefined,
  },
  getters: {
    allCategories: (state: TState) => {
      return state.categories;
    },
    allProducts: (state: TState) => {
      return state.products;
    },
    categoryId: (state: TState) => {
      return state.categoryId;
    },
  },
  mutations: {
    updateCategories(state: TState, newCategories: TCategory[]) {
      state.categories = newCategories;
    },
    updateProducts(
      state: TState,
      payload: { newProducts: TProduct[]; categoryId: string }
    ) {
      state.categoryId = payload.categoryId;
      state.products = payload.newProducts;
    },
  },
  actions: {
    async fetchCategories({ commit }) {
      const res = await fetch("https://rozalux-bratsk.ru/api/categories");
      const categories = await res.json();
      commit("updateCategories", categories);
    },
    async fetchProducts({ commit }, options?: { categoryId?: string }) {
      const query = new URLSearchParams();
      if (options?.categoryId) query.append("categoryId", options.categoryId);

      const res = await fetch(
        `https://rozalux-bratsk.ru/api/products?${query.toString()}`
      );
      const products: { items: TProduct[] } = await res.json();
      commit("updateProducts", {
        newProducts: products.items,
        categoryId: options?.categoryId,
      });
    },
  },
  modules: {},
});
