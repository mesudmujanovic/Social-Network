import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Verify } from 'src/app/interface/Verify-interface';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { VerifyService } from 'src/app/service/verify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  token: string = this.localStorage.getLocalStorage("token");
  users: Verify[] = [];
  filteredUsers: Verify[] = [];
  selectedUser: Verify | null = null;

  constructor(
    private localStorage: LocalStorageService,
    private VerifyService: VerifyService) { }

  ngOnInit() {
    this.VerifyService.getAll().subscribe(
      (users: Verify[]) => {
        this.users = users;
        console.log("this.users", this.users);

      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  search(keyword: string): void {
    this.filteredUsers = this.users.filter(user => {
      return user.nameAccount.toLowerCase().includes(keyword.toLowerCase()) ||
        user.lastNameAccount.toLowerCase().includes(keyword.toLowerCase());
    })
  }

  userView(user) {
    this.selectedUser = user;
    this.filteredUsers = [];
  }

  closeView() {
    this.selectedUser = null;
  }

  closeFoundUsers(){
    this.filteredUsers = [];
  }

}
