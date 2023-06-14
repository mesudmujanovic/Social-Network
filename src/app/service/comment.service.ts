import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../constants/Api-url';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor( private http: HttpClient ) { }

  addComment( commentText: string, commentName: string, postId: number, verId: number ): Observable<Comment>{
   const commentRequest = { commentText, commentName };
    return this.http.post<Comment>(`${BASE_URL}/saveComment/postId/${postId}/verId/${verId}`,commentRequest)
  };

  getAllComments(): Observable<any>{
    return this.http.get<any>(`${BASE_URL}/allComments`)
  }
}
