import { Action } from "@ngrx/store";
import { User } from "../../interface/User-interface";


export enum _SaveUser{
    AddUser = '[User] Add User'
}

export class AddUser implements Action {
    public readonly type = _SaveUser.AddUser
    constructor( public payload: User ) {}
}