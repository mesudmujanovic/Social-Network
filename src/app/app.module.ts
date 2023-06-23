import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { PostComponent } from './component/post/post.component';
import { VerifyComponent } from './component/verify/verify.component';
import { HeaderComponent } from './component/flayout/header/header.component';
import { ProfileComponent } from './component/profile/profile.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import { StoreModule } from '@ngrx/store';
import { appReducer } from './ngrx-store/reducers/app.reducer';
import { AllVerifyUsersComponent } from './component/all-verify-users/all-verify-users.component';
import { AllMyFriendsComponent } from './component/all-my-friends/all-my-friends.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    PostComponent,
    VerifyComponent,
    HeaderComponent,
    ProfileComponent,
    AllVerifyUsersComponent,
    AllMyFriendsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot( appReducer ),
    StoreDevtoolsModule.instrument({maxAge:25})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
