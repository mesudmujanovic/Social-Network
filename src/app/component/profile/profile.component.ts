import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Post } from 'src/app/interface/Post-interface';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  postByPostName: Observable<Post[]>;
  userName: string;
  constructor( private postService: PostService,
               private localStorage: LocalStorageService ){}

  getPostByUsername(): Observable<Post[]>{
    return this.postByPostName = this.postService.getPostByUserName(this.userName).pipe(
      tap( response =>{})
    )
  }


  ngOnInit(): void{
   
    this.userName = this.localStorage.getLocalStorage('name'); 

    this.getPostByUsername().subscribe( response =>{
      console.log("profile", response);
      
    })
  }
}
