import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/User-interface';
import { BASE_URL } from '../constants/Api-url';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor( private http: HttpClient ) { }

  signUp( username: string, password: number ): Observable<any> {
    const userPass = {username, password}
    return this.http.post<User>(`${BASE_URL}/auth/signup`,userPass)
  }
}
