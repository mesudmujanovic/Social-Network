import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { LoginService } from 'src/app/service/login.service';
import { VerifyService } from '../../../service/verify.service';
import { Verify } from 'src/app/interface/Verify-interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  token: string = this.localStorage.getLocalStorage("token");
  users: Verify[] = [];
  filteredUsers: Verify[] = [];
  selectedUser: Verify | null = null;

  constructor(
    private router: Router,
    private localStorage: LocalStorageService,
    private VerifyService: VerifyService ){}

  linkToProfile(){
    const token = localStorage.getItem('token');
    if ( token ){
        this.router.navigate(['/profile']);
    }else{
      alert("morate se prvo prijaviti");
      this.router.navigate(['/signUp'])
    }
  }

  logOut(): void {
  this.localStorage.removeLocalStorage("token");
  this.localStorage.removeLocalStorage("user");
  this.localStorage.removeLocalStorage("verifyId");
  this.localStorage.removeLocalStorage("name");
  this.localStorage.removeLocalStorage("allVerify");
  this.localStorage.removeLocalStorage("postId");
  this.router.navigate(['/']);
  }

  ngOnInit(){
    this.VerifyService.getAll().subscribe(
      ( users: Verify[]) =>{
        this.users = users;
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

 search( keyword: string ): void {
  this.filteredUsers = this.users.filter( user =>{
    return user.nameAccount.toLowerCase().includes( keyword.toLowerCase() ) ||
           user.lastNameAccount.toLowerCase().includes( keyword.toLowerCase() );
  })
 }
 
 userView(user){
  this.selectedUser = user;
 }

 closeView(){
  this.selectedUser = null;
 }


}