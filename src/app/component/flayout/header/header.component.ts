import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  token: string = this.localStorage.getLocalStorage("token");

  constructor(
    private router: Router,
    private localStorage: LocalStorageService ){}

  linkToProfile(){
    const token = localStorage.getItem('token');
    if ( token ){
        this.router.navigate(['/profile']);
    }else{
      alert("morate se prvo prijaviti");
      this.router.navigate(['/signUp'])
    }
  }

  logOut(): void {
  this.localStorage.removeLocalStorage("token");
  this.router.navigate(['/']);
  }

}
