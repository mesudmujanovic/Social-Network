import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Post } from 'src/app/interface/Post-interface';
import { Verify } from 'src/app/interface/Verify-interface';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { PostService } from 'src/app/service/post.service';
import { VerifyService } from 'src/app/service/verify.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  postByPostName: Observable<Post[]>;
  userName: string;
  verifyId: number
  allVerifyUser: Observable<Verify>;

  constructor(private postService: PostService,
    private localStorage: LocalStorageService,
    private verifyService: VerifyService) { }

  getPostByUsername(): Observable<Post[]> {
    return this.postByPostName = this.postService.getPostByUserName(this.userName).pipe(
      tap(response => {
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

    this.verifyId = this.localStorage.getLocalStorage("verifyId");

    this.getPostByUsername().subscribe(response => {
    })

    this.getVerifyById().subscribe(response => {
      console.log("res", response);
    });
  }
}
