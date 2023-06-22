import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { UserInfoState } from "../state/user.state";


const userSelectors = ( state: AppState ) => state.allInfo;

export const getUser = createSelector(
    userSelectors,
    ( state:UserInfoState ) => state.user
)

export const getVerify = createSelector (
    userSelectors,
    ( state: UserInfoState ) => state.verify
)