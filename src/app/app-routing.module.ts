import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { LoginComponent } from './component/login/login.component';
import { VerifyAccComponent } from './component/verify-acc/verify-acc.component';

const routes: Routes = [
  {path:'', component: SignUpComponent},
  {path:'login', component: LoginComponent},
  {path:'verify', component: VerifyAccComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
