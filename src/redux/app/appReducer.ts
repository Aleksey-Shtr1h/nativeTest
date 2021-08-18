import { Dispatch } from "react";
import { GlobalActionInterface } from "../typeState";
import { ActionCreatorApp } from './appAction';
import { ActionTypeApp, AppActionInterface, AppState, ProductsInterface } from './typesApp';

export const initialState: AppState = {
  favoriteProducts: [],
  basketProducts: [],
  isPreloadMessanges: true,

};

export const OperationApp: any = {
  putProduct: (favoriteProducts: ProductsInterface[], item: ProductsInterface, type: string) => (dispatch: Dispatch<GlobalActionInterface>) => {
    const newProducts: ProductsInterface[] = favoriteProducts.slice()
    const findProduct = favoriteProducts.find((product) => product.id === item.id)

    if (!findProduct) {
      newProducts.push(item);
      if (type === "favorite") dispatch(ActionCreatorApp.putFavoriteProduct(newProducts))
      if (type === "basket") dispatch(ActionCreatorApp.putBasketProduct(newProducts))
    }
    if (findProduct) {
      const deleteProduct = newProducts.findIndex((product) => product.id === item.id)
      newProducts.splice(deleteProduct, 1)

      if (type === "favorite") dispatch(ActionCreatorApp.putFavoriteProduct(newProducts))
      if (type === "basket") dispatch(ActionCreatorApp.putBasketProduct(newProducts))
    }
  },

  deleteProduct: (favoriteProducts: ProductsInterface[], item: ProductsInterface) => (dispatch: Dispatch<GlobalActionInterface>) => {
    const newProducts: ProductsInterface[] = favoriteProducts.slice()


    const deleteProduct = newProducts.findIndex((product) => product.id === item.id)
    newProducts.splice(deleteProduct, 1)

    // console.log(newProducts);

    dispatch(ActionCreatorApp.putBasketProduct(newProducts))

  }

};

export const appReducer = (state = initialState, action: AppActionInterface): AppState => {
  switch (action.type) {

    case ActionTypeApp.PUT_PRODUCT_FAVORITE:
      return { ...state, favoriteProducts: action.payload };

    case ActionTypeApp.PUT_PRODUCT_BASKET:
      return { ...state, basketProducts: action.payload };

    case ActionTypeApp.DELETE_PRODUCTS:
      return { ...state, basketProducts: action.payload };

    case ActionTypeApp.PRELOAD_MESSANGES:
      return { ...state, isPreloadMessanges: action.payload };

    default:
      break;
  }

  return state;
};
