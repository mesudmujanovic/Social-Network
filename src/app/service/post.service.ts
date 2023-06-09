import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interface/Post-interface';
import { BASE_URL } from '../constants/Api-url';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  addPost(text: string, userId: number): Observable<Post> {
    const body = {  text, userId }; 
    return this.http.post<Post>(`${BASE_URL}/post/userId/${userId}`, body);
  }

  getAllPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(`${BASE_URL}/allPosts`);
  }
}
