import { Action } from "@ngrx/store";
import { User } from "../../interface/User-interface";
import { Verify } from "src/app/interface/Verify-interface";
import { Post } from "src/app/interface/Post-interface";


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

export enum _SavePost {
    AddPost = '[Post] Add Post'
}

export class AddPost implements Action{
    public readonly type = _SavePost.AddPost;
    constructor( public payload: Post ) {}
}

export enum _SaveComment{
    AddComment = '[Comment] Add Comment'
}

export class AddComment implements Action{
    public readonly type = _SaveComment.AddComment;
    constructor( public payload: Comment ){}
}

export type UserAction = AddUser | AddVerify | AddPost | AddComment;