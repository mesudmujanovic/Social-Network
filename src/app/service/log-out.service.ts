import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LogOutService {

  constructor( private localStorage: LocalStorageService ) { }

  get logOut(): void {
   return this.localStorage.getLocalStorage("token");
  }
}
