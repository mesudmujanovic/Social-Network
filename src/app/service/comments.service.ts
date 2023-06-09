import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../constants/Api-url';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }


  addComment(postId: number, text: string, userId: number): Observable<Comment> {
    const comment = { text };
    return this.http.post<Comment>(`${BASE_URL}/comment/post/${postId}/user/${userId}`, comment, { responseType: 'json' });
  }
}
