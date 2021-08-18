import { ActionTypeApp, ProductsInterface, PRELOAD_MESSANGES, PUT_PRODUCT_FAVORITE, PUT_PRODUCT_BASKET, DELETE_PRODUCTS } from "./typesApp";

export const ActionCreatorApp = {
  putFavoriteProduct: (products: ProductsInterface[]): PUT_PRODUCT_FAVORITE => ({
    type: ActionTypeApp.PUT_PRODUCT_FAVORITE,
    payload: products,
  }),

  putBasketProduct: (products: ProductsInterface[]): PUT_PRODUCT_BASKET => ({
    type: ActionTypeApp.PUT_PRODUCT_BASKET,
    payload: products,
  }),

  deleteProducts: (products: ProductsInterface[] | []): DELETE_PRODUCTS => ({
    type: ActionTypeApp.DELETE_PRODUCTS,
    payload: products,
  }),

  toglleMessangesPreload: (isTogglePreload: boolean): PRELOAD_MESSANGES => ({
    type: ActionTypeApp.PRELOAD_MESSANGES,
    payload: isTogglePreload,
  }),


};
