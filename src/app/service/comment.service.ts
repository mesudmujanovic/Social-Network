import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../constants/Api-url';
import { getComment } from '../ngrx-store/selectors/selector';
import { AppState } from '../ngrx-store/state/app.state';
import { Store } from '@ngrx/store';
import { AddComment } from '../ngrx-store/acionts/actions';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient,
    private store: Store<AppState>) { }

  addComment(commentText: string, commentName: string, postId: number, verId: number): Observable<Comment> {
    const commentRequest = { commentText, commentName };
    return this.http.post<Comment>(`${BASE_URL}/saveComment/postId/${postId}/verId/${verId}`, commentRequest)
  };

  getAllComments(): Observable<any> {
    return this.http.get<any>(`${BASE_URL}/allComments`)
  }

  get comment() {
    return this.store.select(getComment)
  }

  addCommentToNgrx(comment: Comment) {
    this.store.dispatch(new AddComment(comment));
  }
}
