import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Verify } from '../interface/Verify-interface';
import { BASE_URL } from '../constants/Api-url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  constructor( private http: HttpClient ) { }

  addVerify(verify: Verify, userId: number): Observable<Verify> {
    return this.http.post<Verify>(`${BASE_URL}/saveVerify/user/${userId}`, verify);
}

getVerifybyId(verId: number): Observable<Verify> {
  return this.http.get<Verify>(`${BASE_URL}/verifyById/${verId}`);
}

getAll(): Observable<Verify[]> {
  return this.http.get<Verify[]>(`${BASE_URL}/allVerify`)
}

}
