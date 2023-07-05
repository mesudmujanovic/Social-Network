import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';
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
  showSearch: boolean = false;

  constructor(
    private router: Router,
    private localStorage: LocalStorageService,
    private VerifyService: VerifyService) { }

  show() {
    this.showSearch = !this.showSearch;
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

  ngOnInit() {
    this.VerifyService.getAll().subscribe(
      (users: Verify[]) => {
        this.users = users;
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

}