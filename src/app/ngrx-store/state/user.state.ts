import { User } from "src/app/interface/User-interface";
import { Verify } from "src/app/interface/Verify-interface";

export interface UserInfoState {

user: User[],
verify: Verify[]

}

export const initalUserState: UserInfoState = {
user: [],
verify: []

}