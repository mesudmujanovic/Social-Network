import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Verify } from '../interface/Verify-interface';
import { BASE_URL } from '../constants/Api-url';

@Injectable({
  providedIn: 'root'
})
export class AddFriendsService {

  constructor( private http: HttpClient ) { }

  addFriends( verifyAccId: number, addVerifyAccId: number  ): Observable<Verify> {
    return this.http.post<Verify>(`${BASE_URL}/verify/${verifyAccId}/addConnectedVerifyAcc/${addVerifyAccId}`, null)
  }

  getVerifyAccWithConnectedFriends( verId: number ): Observable<Verify[]>{
    return this.http.get<Verify[]>(`${BASE_URL}/verify/${verId}/connectedVerifyAccs`);
  }
}
