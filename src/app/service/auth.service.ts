import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../interface/User-interface';
import { BASE_URL } from '../constants/Api-url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUsernameById(userId: number): Observable<string> {
    return this.http.get<string>(`${BASE_URL}/auth/users/${userId}/username`);
  }

  
}
