import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
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
  allVerifyUser: Observable<Verify>;
  verId: number;
  getAllUsers$: Observable<User[]>
  userId: number;
  verifyId: number
  imageUrl: string = 'assets/downloadtw.jpeg';

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private localStorage: LocalStorageService,
    private router: Router) {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onLogin() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.get('password')?.value
      // code from 41 to 47 for save to ngrx
      const user: User = {
        username: this.loginForm.get('username').value,
        password: this.loginForm.get('password').value,
        id: this.userId,
      }
      this.loginService.saveUserToNgrx(user)
      this.loginService.login(username, password).pipe(
        tap(response => {
          const userInfo = response.id;
          const token = response;
          const name = response.username
          this.localStorage.setLocalStorage("name", name)
          this.localStorage.setLocalStorage("user", userInfo);
          this.localStorage.setLocalStorage("token", token)
          this.router.navigate(['/post'])
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

  ngOnInit(): void {

    this.userId += this.localStorage.getLocalStorage("user");

    this.allUsers().subscribe()
  }

}
