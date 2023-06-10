import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly USER_KEY = 'currentUser';


  constructor(private localStorageService: LocalStorageService) { }

  getCurrentUser(): Observable<string> {
    const currentUser = this.localStorageService.getLocalStorage(this.USER_KEY);
    return of(currentUser);
  }

  setCurrentUser(username: string): void {
    this.localStorageService.setLocalStorage(this.USER_KEY, username);
  }
  clearCurrentUser(): void {
    this.localStorageService.setLocalStorage(this.USER_KEY, null);
  }
}
