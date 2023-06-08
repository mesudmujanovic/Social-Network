import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interface/Post-interface';
import { BASE_URL } from '../constants/Api-url';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  // addPost( post:string, userId: number ): Observable<Post>{
  //   return this.http.post<Post>(`${BASE_URL}/post/userId/${userId}`,post);
  // }

  addPost(text: string, userId: number): Observable<Post> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { text: text }; // Koristimo objekat umesto JSON.stringify()
    return this.http.post<Post>(`${BASE_URL}/post/userId/${userId}`, body, { headers });
  }
}
