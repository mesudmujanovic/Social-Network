import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, take, tap } from 'rxjs';
import { VerifyService } from 'src/app/service/verify.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent {

  verifyForm: FormGroup

  constructor( private formBuilder: FormBuilder,
               private verifyService: VerifyService ){
   
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
      this.verifyService.addVerify(verify).pipe(
        tap(response =>{
          console.log("verifyRes",response);
        })
      ).subscribe( () =>{
        console.log();
      })
    }
  }
}
