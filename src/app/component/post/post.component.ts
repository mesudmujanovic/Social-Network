import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, catchError, map, of, switchMap, take, tap } from 'rxjs';
import { Post } from 'src/app/interface/Post-interface';
import { Verify } from 'src/app/interface/Verify-interface';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { PostService } from 'src/app/service/post.service';
import { VerifyService } from '../../service/verify.service';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/app/constants/Api-url';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
   
  postForm: FormGroup
  allPosts$: Observable<Post[]>;
  verifySave: Verify[];

  constructor(private formBuilder: FormBuilder,
              private localStorage: LocalStorageService,
              private postService: PostService,
              private verifyService: VerifyService,
              private http: HttpClient){
   
    this.postForm = this.formBuilder.group({
      postText: [ '', Validators.required ]
    })
  }

  
  onPost(){
    if( this.postForm) {
      const postText = this.postForm.value.postText;
      const postName = this.localStorage.getLocalStorage('name')
      const id = this.localStorage.getLocalStorage('verifyId');
       this.postService.addPost( postText, postName, id ).pipe(
        tap( response => {
          console.log("addPosts", response);
        }),
        switchMap( ()=> this.allPosts() ),
        ).subscribe( posts =>{
        console.log("posts", posts);
      })
    }
  };


  allPosts(): Observable<Post[]>{
    return this.allPosts$ = this.postService.getAllPosts().pipe(
      catchError( (error) =>{
        console.log("error",error);
      return of();
      })
    )
  }
 
 
  ngOnInit(): void{
    this.allPosts().subscribe(posts => {
      console.log("allPosts", posts);
    });
  }

}

