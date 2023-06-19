import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, catchError, of, tap } from 'rxjs';
import { Verify } from 'src/app/interface/Verify-interface';
import { LocalStorageService } from 'src/app/service/local-storage.service';
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

  constructor(private formBuilder: FormBuilder,
    private verifyService: VerifyService,
    private localStorage: LocalStorageService,
    private router: Router) {

    this.verifyForm = this.formBuilder.group({
      nameAccount: ['', Validators.required],
      lastNameAccount: ['', Validators.required],
      age: [null, Validators.required],
      job: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  onVerify() {
    if (this.verifyForm) {
      const verify = this.verifyForm.value;
      const userId = this.localStorage.getLocalStorage("user")
      this.verifyService.addVerify(verify, userId).pipe(
        tap(response => {
          this.router.navigate(['/post']);
          const verifyId = response.id;
          const allVerifys = response;
          this.localStorage.setLocalStorage("verifyId", verifyId);
          this.localStorage.setLocalStorage("allVerify", allVerifys)
          console.log("verifyRes", response);
        }),
        catchError( (error) =>{
          console.log("verError",error);
          alert("Morate se prvo ulogovati")
          this.router.navigate(['/login']);
          return of([]);
        }),
      ).subscribe(() => {
        console.log();
      })
    }
  }

  allVerifuUsers(): Observable<Verify[]>{
  return this.allVerify = this.verifyService.getAll().pipe( 
    tap( response =>{
      console.log("ver",response);
      this.fromDBtoLocalStorage = response;
    })
  )
  }

  ngOnInit(): void {
    this.allVerifuUsers().subscribe( users =>{
      console.log();
    })
  }
}
