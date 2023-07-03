import { Component } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Post } from 'src/app/interface/Post-interface';
import { Verify } from 'src/app/interface/Verify-interface';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { PostService } from 'src/app/service/post.service';
import { LoginService } from '../../service/login.service';
import { User } from 'src/app/interface/User-interface';
import { VerifyService } from 'src/app/service/verify.service';
import { AddFriendsService } from 'src/app/service/add-friends.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  postByPostName: Observable<Post[]>;
  userName: string;
  allVerifyUser: Observable<Verify>;
  allMyFriends: Observable<Verify[]>
  verifyId: number;
  showSearch: boolean = false;
  showAllMyPosts: boolean = false;
  showAllMyComments: boolean = false;
  showMyTexts: boolean = false
  
  constructor(private postService: PostService,
    private localStorage: LocalStorageService,
    private loginService: LoginService,
    private verifyService: VerifyService,
    private addFriends: AddFriendsService) { }

    showAllText(){
    this.showMyTexts = !this.showMyTexts

    }

    showAllComm(){
      this.showAllMyComments = !this.showAllMyComments
      this.showAllMyPosts = false
      this.showMyTexts = false;
    }

    showAllPost(){
      this.showAllMyPosts = !this.showAllMyPosts
      this.showAllMyComments = false;
      this.showMyTexts = false;
    }

    show(){
      this.showSearch = !this.showSearch;
     }

    
    
  getPostByUsername(): Observable<Post[]> {
    return this.postByPostName = this.postService.getPostByUserName(this.userName).pipe(
      tap(response => {
      })
    )
  }

  getAllUsers(): Observable<User[]>{
    return this.loginService.getAllUsers().pipe(
      tap( response =>{
      })
    )
  }

  getVeriByUsername(): Observable<Verify>{
    return this.allVerifyUser = this.verifyService.getByVerifyName(this.userName).pipe(
      tap( response =>{
      },
      catchError( error =>{
        return of([]);
      }) )
    )
  }
  

  getAllFriends(): Observable<Verify[]>{
   return this.allMyFriends = this.addFriends.getVerifyAccWithConnectedFriends(this.verifyId)
    console.log("all",this.allMyFriends);
    
  }

  ngOnInit(): void {
    this.verifyId = this.localStorage.getLocalStorage("verifyId");
    this.userName = this.localStorage.getLocalStorage('name');

    this.getAllUsers().subscribe();
    
    this.getPostByUsername().subscribe();

    this.getVeriByUsername().subscribe();
    
    this.getAllFriends().subscribe();
  }
}
