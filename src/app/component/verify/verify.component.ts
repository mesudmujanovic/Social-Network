import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, take, tap } from 'rxjs';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { VerifyService } from 'src/app/service/verify.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent {

  verifyForm: FormGroup

  constructor( private formBuilder: FormBuilder,
               private verifyService: VerifyService,
               private localStorage: LocalStorageService ){
   
                this.verifyForm = this.formBuilder.group({
                  nameAccount: ['', Validators.required],
                  lastNameAccount: ['', Validators.required],
                  age: [null, Validators.required],
                  job: ['', Validators.required],
                  phone: ['', Validators.required]
                });
  }

  onVerify(){
    if( this.verifyForm ) {
      const verify = this.verifyForm.value;
      const userId = this.localStorage.getLocalStorage("user")
      this.verifyService.addVerify( verify, userId ).pipe(
        tap(response =>{
          console.log("verifyRes",response);
        })
      ).subscribe( () =>{
        console.log();
      })
    }
  }

  ngOnInit(): void {
    
  }
}
