import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject, of, tap } from 'rxjs';
import { User } from 'src/app/interface/User-interface';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private localStorage: LocalStorageService,
    private router: Router)
     {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onLogin(){
    if( this.loginForm.valid ){
      const username = this.loginForm.value.username;
      const password = this.loginForm.get('password')?.value
        this.loginService.login( username, password).pipe(
        tap ( response =>{
          const userInfo = response.id;
          const token = response;
         console.log("userId",userInfo);  
          this.localStorage.setLocalStorage("user",userInfo);
          this.localStorage.setLocalStorage("token",response)
          this.router.navigate(['/post']);
        })
      ).subscribe( user =>{
        console.log("subs",user);
      }, error => {
        console.log("error",error);
      })
    }
  }

  
  ngOnInit(): void{
  }
  
}
