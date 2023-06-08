import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setLocalStorage(key: string, value: any): void{
    localStorage.setItem(key, JSON.stringify(value));
  };

  getLocalStorage( key: string): any {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null
  }
}
