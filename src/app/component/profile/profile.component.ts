import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Post } from 'src/app/interface/Post-interface';
import { Verify } from 'src/app/interface/Verify-interface';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { PostService } from 'src/app/service/post.service';
import { VerifyService } from 'src/app/service/verify.service';
import { LoginService } from '../../service/login.service';
import { User } from 'src/app/interface/User-interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  postByPostName: Observable<Post[]>;
  userName: string;
  verifyId: number
  userId: number = -1;
  allVerifyUser: Observable<Verify>;
  

  constructor(private postService: PostService,
    private localStorage: LocalStorageService,
    private verifyService: VerifyService,
    private loginService: LoginService) { }

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

  getVerifyById(): Observable<Verify> {
    return this.allVerifyUser = this.verifyService.getVerifybyId(this.verifyId).pipe(
      tap(response => {

      })
    );
  }


  ngOnInit(): void {
    this.userName = this.localStorage.getLocalStorage('name');
    this.userId += this.localStorage.getLocalStorage("user");

    this.getAllUsers().subscribe(response => {
      const verifyDtoList = response[this.userId].verifyDtoList;
      if (verifyDtoList ) {
        this.verifyId = verifyDtoList[0].id;
      }
      this.getVerifyById().subscribe( ver =>{
        this.localStorage.setLocalStorage("verifyId", this.verifyId)
      });
    });
    
    this.getPostByUsername().subscribe(response => {
    })


 
  }
}
