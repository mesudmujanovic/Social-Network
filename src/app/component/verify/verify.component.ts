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
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent {

  verifyForm: FormGroup
  allVerify: Observable<Verify[]>;
  fromDBtoLocalStorage: Verify[];
  verifyId: number
  userId: number = -1;
  allVerifyUser: Observable<Verify>;
  nameAccounts: string;
  false: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private verifyService: VerifyService,
    private localStorage: LocalStorageService,
    private router: Router,
    private loginService: LoginService) {

    this.nameAccounts = this.localStorage.getLocalStorage("name");

    this.verifyForm = this.formBuilder.group({
      nameAccount: [this.nameAccounts, Validators.required],
      lastNameAccount: ['', Validators.required],
      age: [null, Validators.required],
      job: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  onVerify() {
    if (this.verifyForm) {
      const verify = this.verifyForm.value;
      console.log("ver", verify);
      const userId = this.localStorage.getLocalStorage("user")
      this.verifyService.saveVerifyToNgrx(verify);
      this.verifyService.addVerify(verify, userId).pipe(
        tap(response => {
          this.router.navigate(['/post']);
          const verifyId = response.id;
          const allVerifys = response;
          this.localStorage.setLocalStorage("verifyId", verifyId);
          this.localStorage.setLocalStorage("allVerify", allVerifys)
          console.log("verifyRes", response);
        }),
        catchError((error) => {
          console.log("verError", error);
          alert("Morate se prvo ulogovati")
          this.router.navigate(['/login']);
          return of([]);
        }),
      ).subscribe(() => {
        console.log();
      })
    }
  }

  allVerifuUsers(): Observable<Verify[]> {
    return this.allVerify = this.verifyService.getAll().pipe(
      tap(response => {
        console.log("ver", response);
        this.fromDBtoLocalStorage = response;
      })
    )
  }

 

  getAllUsers(): Observable<User[]> {
    return this.loginService.getAllUsers().pipe(
      tap(response => {
      })
    )
  }

  ngOnInit(): void {

    this.userId += this.localStorage.getLocalStorage("user");
    this.getAllUsers().subscribe(response => {
      const verifyDtoList = response[this.userId].verifyDtoList;
      if (verifyDtoList) {
        this.verifyId = verifyDtoList[0].id;
        console.log("thisver", this.verifyId);
      }
    });

    this.allVerifuUsers().subscribe(response => { });

    this.nameAccounts = this.localStorage.getLocalStorage("name")
  }
}
