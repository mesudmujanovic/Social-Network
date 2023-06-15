import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(
    private loginService: LoginService,
    private router: Router ){}

  linkToProfile(){
    const token = localStorage.getItem('token');
    if ( token ){
        this.router.navigate(['/profile']);
    }else{
      alert("morate se prvo prijaviti");
      this.router.navigate(['/signUp'])
    }
    
  }
}
