import { Component } from '@angular/core';
import { Observable, catchError, of, take, tap } from 'rxjs';
import { Image } from 'src/app/interface/Image-interface';
import { User } from 'src/app/interface/User-interface';
import { Verify } from 'src/app/interface/Verify-interface';
import { AddFriendsService } from 'src/app/service/add-friends.service';
import { ImageService } from 'src/app/service/image.service';
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

  getAllUsers$: Observable<User[]>
  getAllImageUsers: string[] = [];
  getAllverName: Observable<Image[]>

  constructor(private verifyService: VerifyService,
    private addFriendsService: AddFriendsService,
    private localStorage: LocalStorageService,
    private imageService: ImageService) {
  }

  addFriends() {
    return this.addFriendsService.addFriends(this.verifyId, this.friendsId).pipe(
      tap(response => {
        alert("Uspesno dodat prijatelj!")
        this.selectedUsers = null;
      }),
      catchError(error => {
        console.log("addFriends", error);
        return of()
      })
    ).subscribe(response => {
    })
  }

  viewFriend(verifyUsers) {
    this.selectedUsers = verifyUsers;
    this.friendsId = this.selectedUsers.id;
  }

  viewClose() {
    this.selectedUsers = null;
  }

  allImages() {
    return this.imageService.getAllImages().subscribe(
      (response: Image[]) => {
        this.getAllImageUsers = response.map(response => 'data:image/jpeg;base64,' + response);
      }
    )
  }

  allImagesName(): Observable<Image[]> {
    return this.getAllverName = this.imageService.getImageVerName().pipe(
      tap(response => {
      })
    )
  }

  ngOnInit(): void {
    this.verifyUsers.subscribe();
    this.allImages()
    this.allImagesName().subscribe()
  }
}
