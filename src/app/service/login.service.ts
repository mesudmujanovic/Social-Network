import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/User-interface';
import { BASE_URL } from '../constants/Api-url';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient ) { }

  login(username: string, password: number): Observable<User> {
    const userPass = { username, password }
  return this.http.post<User>(`${BASE_URL}/auth/login`, userPass);
  }
}
