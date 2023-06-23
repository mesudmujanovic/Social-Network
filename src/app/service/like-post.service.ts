import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Like } from '../interface/Like-interface';
import { BASE_URL } from '../constants/Api-url';

@Injectable({
  providedIn: 'root'
})
export class LikePostService {

  constructor(private http: HttpClient) { }

  addLike( postCountLike: number, postCountDislike: number, postId: number, verifyId: number ): Observable<Like> {
    const likeDislike = {postCountLike, postCountDislike};
    return this.http.post<Like>(`${BASE_URL}/likePost/${postId}/verify/${verifyId}`,likeDislike)
  }
}
