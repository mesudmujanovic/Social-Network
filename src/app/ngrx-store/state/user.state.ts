import { Post } from "src/app/interface/Post-interface";
import { User } from "src/app/interface/User-interface";
import { Verify } from "src/app/interface/Verify-interface";

export interface UserInfoState {

user: User[],
verify: Verify[],
post: Post[]
comment: Comment[]

}

export const initalUserState: UserInfoState = {
user: [],
verify: [],
post:[],
comment: []

}