import { Component } from '@angular/core';
import { Observable, catchError, of, take, tap } from 'rxjs';
import { Verify } from 'src/app/interface/Verify-interface';
import { AddFriendsService } from 'src/app/service/add-friends.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { VerifyService } from 'src/app/service/verify.service';

@Component({
  selector: 'app-all-verify-users',
  templateUrl: './all-verify-users.component.html',
  styleUrls: ['./all-verify-users.component.css']
})
export class AllVerifyUsersComponent {

  selectedUsers: Verify;
  verifyUsers: Observable<Verify[]> = this.verifyService.getAll();
  verifyId: number = this.localStorage.getLocalStorage("verifyId")
  friendsId: number;
  

  constructor(private verifyService: VerifyService,
    private addFriendsService: AddFriendsService,
    private localStorage: LocalStorageService) {
  }

  addFriends() {
    return this.addFriendsService.addFriends(this.verifyId, this.friendsId).pipe(
      tap(response => {
        alert("Uspesno dodat prijatelj!")
        this.selectedUsers = null;
        console.log("AddFriends", response);
      }),
      catchError(error => {
        console.log("addFriends", error);
        return of()
      })
    ).subscribe(response => {
      console.log("addFriendsSubs", response);

    })
  }



  viewFriend(verifyUsers) {
    this.selectedUsers = verifyUsers;
    console.log("friends", this.selectedUsers);
    this.friendsId = this.selectedUsers.id;
  }

  viewClose() {
    this.selectedUsers = null;
  }

  ngOnInit(): void {

    this.verifyUsers.subscribe();
  }
}
