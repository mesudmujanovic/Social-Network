import { ActionReducerMap } from "@ngrx/store";
import { userReducer } from "./reducer";
import { AppState } from "../state/app.state";


export const appReducer: ActionReducerMap< AppState, any > = {
    allInfo: userReducer
}