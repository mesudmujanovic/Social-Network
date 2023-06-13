import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interface/Post-interface';
import { BASE_URL } from '../constants/Api-url';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  addPost( post: Post, id: number ): Observable<Post>{
    return this.http.post<Post>(`${BASE_URL}/savePost/verifyId/${id}`,post)
  }
}
