import { GlobalState } from "../typeState";

export const putFavoriteProductSelector = (state: GlobalState) => {
  return state.APP.favoriteProducts;
};

export const putBasketProductSelector = (state: GlobalState) => {
  return state.APP.basketProducts;
};

export const getTogglePreloadMessanges = (state: GlobalState) => {
  return state.APP.isPreloadMessanges;
};


