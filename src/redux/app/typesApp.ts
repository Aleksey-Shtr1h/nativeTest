export interface ProductsInterface {
  id: string;
  pathImage: any;
  price: number;
  discount?: number | null;
  rating: number;
  title: string;
  isLike: boolean;
}

export interface AppState {
  favoriteProducts: ProductsInterface[],
  basketProducts: ProductsInterface[],

  isPreloadMessanges: boolean;

}

export enum ActionTypeApp {
  PUT_PRODUCT_BASKET = `APP/PUT_PRODUCT_BASKET`,
  PUT_PRODUCT_FAVORITE = `APP/PUT_PRODUCT_FAVORITE`,
  DELETE_PRODUCTS = `APP/DELETE_PRODUCTS`,
  PRELOAD_MESSANGES = `APP/PRELOAD_MESSANGES`,
}

export interface PUT_PRODUCT_BASKET {
  type: ActionTypeApp.PUT_PRODUCT_BASKET;
  payload: ProductsInterface[] | [];
}

export interface PUT_PRODUCT_FAVORITE {
  type: ActionTypeApp.PUT_PRODUCT_FAVORITE;
  payload: ProductsInterface[] | [];
}

export interface DELETE_PRODUCTS {
  type: ActionTypeApp.DELETE_PRODUCTS;
  payload: ProductsInterface[] | [];
}

export interface PRELOAD_MESSANGES {
  type: ActionTypeApp.PRELOAD_MESSANGES;
  payload: boolean;
}


export type AppActionInterface = PUT_PRODUCT_FAVORITE | PUT_PRODUCT_BASKET | DELETE_PRODUCTS | PRELOAD_MESSANGES;
