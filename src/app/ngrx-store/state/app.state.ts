import { UserInfoState, initalUserState } from './user.state';

export interface AppState {
    allInfo: UserInfoState;
}

export const initalAppState: AppState = {
    allInfo: initalUserState
}

export function getInitialState(): AppState {
    return initalAppState
}