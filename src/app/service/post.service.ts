import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interface/Post-interface';
import { BASE_URL } from '../constants/Api-url';
import { Verify } from '../interface/Verify-interface';
import { AppState } from '../ngrx-store/state/app.state';
import { Store } from '@ngrx/store';
import { getPost } from '../ngrx-store/selectors/selector';
import { AddPost } from '../ngrx-store/acionts/actions';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient,
    private store: Store<AppState>) { }

  addPost(post: string, name: string, id: number): Observable<Post> {
    const postRequest = { postText: post, postName: name };
    return this.http.post<Post>(`${BASE_URL}/savePost/verifyId/${id}`, postRequest);
  }

  getAllPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(`${BASE_URL}/allPosts`);
  }
  
  getPostById( postId: number ): Observable<Post[]>{
    return this.http.get<Post[]>(`${BASE_URL}/postId/${postId}`)
  }

  getPostByUserName ( postName: string): Observable<Post[]>{
    return this.http.get<Post[]>(`${BASE_URL}/post/${postName}`)
  }

  get post(){
    return this.store.select( getPost )
  }

  addPostToNgrx( post: Post ){
    this.store.dispatch( new AddPost(post));
  }
}
