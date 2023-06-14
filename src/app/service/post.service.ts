import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interface/Post-interface';
import { BASE_URL } from '../constants/Api-url';
import { Verify } from '../interface/Verify-interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  addPost(post: string, name: string, id: number): Observable<Post> {
    const postRequest = {
      postText: post,
      postName: name };
    return this.http.post<Post>(`${BASE_URL}/savePost/verifyId/${id}`, postRequest);
  }

  getAllPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(`${BASE_URL}/allPosts`);
  }
  
}
