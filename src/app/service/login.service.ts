import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/User-interface';
import { BASE_URL } from '../constants/Api-url';
import { getUser } from '../ngrx-store/selectors/selector';
import { AppState } from '../ngrx-store/state/app.state';
import { Store } from '@ngrx/store';
import { AddUser } from '../ngrx-store/acionts/actions';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient,
    private store: Store<AppState> ) { }

  login(username: string, password: number): Observable<User> {
    const userPass = { username, password }
  return this.http.post<User>(`${BASE_URL}/auth/login`, userPass);
  }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${BASE_URL}/auth/allUsers`)
  }

  get user() {
    return this.store.select( getUser )
  }

  saveUserToNgrx( user: User ){
    this.store.dispatch( new AddUser(user) );
  }
}
