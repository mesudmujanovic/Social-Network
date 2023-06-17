import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../constants/Api-url';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private http: HttpClient) { }

  setLocalStorage(key: string, value: any): void{
    localStorage.setItem(key, JSON.stringify(value));
  };

  getLocalStorage( key: string): any {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null
  }

  removeLocalStorage( key:string ): void {
   localStorage.removeItem(key); 
  }

  logOutFromLS( key:string ): void {
    localStorage.removeItem(key); 
   }

  getVerifyNameAccount(id: number): Observable<string> {
    return this.http.get<string>(`${BASE_URL}/verifyById/${id}`);
  }
  
}
