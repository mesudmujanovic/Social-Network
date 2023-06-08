import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { SignUpService } from 'src/app/service/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private signService: SignUpService,
              private route: Router){

    this.postForm = this.formBuilder.group({  
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
   if(this.postForm.valid){
    const username = this.postForm.get('username')?.value;
    const password = this.postForm.get('password')?.value;
    this.signService.signUp(username, password).pipe(
      tap( response => {
        console.log("signUpSuces", response);
        this.route.navigate(['/login']);
      })
    ).subscribe( () =>  {}),
    error => {
      console.log(error);
    }
   }
  }

  ngOnInit(): void{

  }
}
