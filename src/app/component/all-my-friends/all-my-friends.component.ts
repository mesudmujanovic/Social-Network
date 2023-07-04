import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, distinctUntilChanged, map } from 'rxjs';
import { Verify } from 'src/app/interface/Verify-interface';
import { AddFriendsService } from 'src/app/service/add-friends.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-all-my-friends',
  templateUrl: './all-my-friends.component.html',
  styleUrls: ['./all-my-friends.component.css']
})
export class AllMyFriendsComponent {

  verId: number;
  allMyFriends: Observable<Verify[]>;
  filteredFriends: Observable<Verify[]>

  constructor( private http: HttpClient,
    private addFriends: AddFriendsService,
    private localStorage: LocalStorageService ){}
  
 ngOnInit(): void{

   this.verId = this.localStorage.getLocalStorage('verifyId');
  
   this.allMyFriends = this.addFriends.getVerifyAccWithConnectedFriends(this.verId);
  console.log("allMyFriends", this.allMyFriends);
  
   this.filteredFriends = this.allMyFriends.pipe(
    map(friends => {
      const uniqueFriends = friends.filter((friend, index, self) => {
        return index === self.findIndex(f => f.id === friend.id);
      });
      return uniqueFriends;
    })
  );

  this.filteredFriends.subscribe(
    frnd => {
      console.log("friends",frnd);
    }
  )
  
 }
}
