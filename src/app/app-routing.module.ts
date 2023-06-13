import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { LoginComponent } from './component/login/login.component';
import { VerifyComponent } from './component/verify/verify.component';
import { PostComponent } from './component/post/post.component';

const routes: Routes = [
  {path:'', component: SignUpComponent},
  {path:'login', component: LoginComponent},
  {path:'verify', component: VerifyComponent},
  {path:'post', component:PostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
