import { Action } from "@ngrx/store";
import { User } from "../../interface/User-interface";
import { Verify } from "src/app/interface/Verify-interface";


export enum _SaveUser{
    AddUser = '[User] Add User'
}

export class AddUser implements Action {
    public readonly type = _SaveUser.AddUser
    constructor( public payload: User ) {}
}

export enum _SaveVerify{
    AddVerify = '[Verify] Add Verify'
}

export class AddVerify implements Action{
    public readonly type = _SaveVerify.AddVerify
    constructor( public payload: Verify ) {}
}


export type UserAction = AddUser | AddVerify;