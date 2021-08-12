import { AppActionInterface, AppState } from "./app/typesApp";


export interface GlobalState {
  APP: AppState;
}

export type GlobalActionInterface = AppActionInterface;