import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Verify } from '../interface/Verify-interface';
import { BASE_URL } from '../constants/Api-url';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../ngrx-store/state/app.state';
import { getVerify } from '../ngrx-store/selectors/selector';
import { AddVerify } from '../ngrx-store/acionts/actions';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  constructor(private http: HttpClient,
    private store: Store<AppState>) { }

  addVerify(verify: Verify, userId: number): Observable<Verify> {
    return this.http.post<Verify>(`${BASE_URL}/saveVerify/user/${userId}`, verify);
  }

  getVerifybyId(verId: number): Observable<Verify> {
    return this.http.get<Verify>(`${BASE_URL}/verifyById/${verId}`);
  }

  getAll(): Observable<Verify[]> {
    return this.http.get<Verify[]>(`${BASE_URL}/allVerify`)
  }

  getByVerifyName(nameAccount: string): Observable<Verify> {
    return this.http.get<Verify>(`${BASE_URL}/verifyUsername/${nameAccount}`)
  }

  get verify() {
    return this.store.select(getVerify)
  }

  saveVerifyToNgrx(verify: Verify) {
    this.store.dispatch(new AddVerify(verify));
  }

}
