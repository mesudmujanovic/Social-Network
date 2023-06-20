import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, catchError, of, tap } from 'rxjs';
import { User } from 'src/app/interface/User-interface';
import { Verify } from 'src/app/interface/Verify-interface';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { LoginService } from 'src/app/service/login.service';
import { VerifyService } from 'src/app/service/verify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup
  allVerify: Observable<Verify[]>
  verId: number;
  getAllUsers$: Observable<User[]>
  userId: number;


  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private localStorage: LocalStorageService,
    private router: Router,
    private verifyService: VerifyService) {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onLogin() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.get('password')?.value
      this.loginService.login(username, password).pipe(
        tap(response => {
          const userInfo = response.id;
          const token = response;
          const name = response.username
          console.log("userId", userInfo);
          this.localStorage.setLocalStorage("name", name)
          this.localStorage.setLocalStorage("user", userInfo);
          this.localStorage.setLocalStorage("token", response)
          this.router.navigate(['/profile'])
        })
      ).subscribe(user => {
        console.log("subs", user);
      }, error => {
        console.log("error", error);
      })
    }
  };

  allUsers(): Observable<User[]> {
    return this.getAllUsers$ = this.loginService.getAllUsers().pipe(
      tap(response => {
      })
    )
  }

  getAllVerifyUser(): Observable<Verify[]> {
    return this.allVerify = this.verifyService.getAll().pipe(
      tap(response => {

      })
    )
  }

  ngOnInit(): void {
    this.onLogin();

    this.getAllVerifyUser().subscribe(response => {
      console.log("response", response);
    });

    this.allUsers().subscribe(response => {
      console.log("allUsers", response[0].verifyDtoList.length === 0);
      console.log("users", response[0].verifyDtoList);
      console.log("all", response);
    })
  }


}
