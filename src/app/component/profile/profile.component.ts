import { Component } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Post } from 'src/app/interface/Post-interface';
import { Verify } from 'src/app/interface/Verify-interface';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { PostService } from 'src/app/service/post.service';
import { LoginService } from '../../service/login.service';
import { User } from 'src/app/interface/User-interface';
import { VerifyService } from 'src/app/service/verify.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  postByPostName: Observable<Post[]>;
  userName: string;
  allVerifyUser: Observable<Verify>;
  

  constructor(private postService: PostService,
    private localStorage: LocalStorageService,
    private loginService: LoginService,
    private verifyService: VerifyService) { }

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

  ngOnInit(): void {
    this.userName = this.localStorage.getLocalStorage('name');

    this.getAllUsers().subscribe();
    
    this.getPostByUsername().subscribe();

    this.getVeriByUsername().subscribe();
    
  }
}
