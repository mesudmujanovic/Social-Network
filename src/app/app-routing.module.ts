import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { LoginComponent } from './component/login/login.component';
import { VerifyComponent } from './component/verify/verify.component';
import { PostComponent } from './component/post/post.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AllVerifyUsersComponent } from './component/all-verify-users/all-verify-users.component';
import { AllMyFriendsComponent } from './component/all-my-friends/all-my-friends.component';
import { SearchComponent } from './component/flayout/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/signUp', pathMatch: 'full' },
  { path: 'signUp',  component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'verify', component: VerifyComponent },
  { path: 'post', component: PostComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'addVerifyUsers', component: AllVerifyUsersComponent },
  { path: 'friends', component: AllMyFriendsComponent },
  { path: 'search', component: SearchComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
