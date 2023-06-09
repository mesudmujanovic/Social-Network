import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, catchError, of, switchMap, tap } from 'rxjs';
import { Comment } from 'src/app/interface/Comment-interface';
import { Post } from 'src/app/interface/Post-interface';
import { CommentsService } from 'src/app/service/comments.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  postForm: FormGroup;
  posts$: Observable<Post[]>;
  commForm: FormGroup
  comment$: Observable<Comment[]>;
 
  constructor(private formBuilder: FormBuilder,
    private postService: PostService,
    private localStorage: LocalStorageService,
    private commentService: CommentsService) {

    this.postForm = this.formBuilder.group({
      text: ['', Validators.required]
    })
    this.commForm = this.formBuilder.group({
      text:['',Validators.required]
    })
  }

  onComment(){
  if(this.commForm.valid){
    const text = this.commForm.get('text')?.value;
    const userId = this.localStorage.getLocalStorage("user");
   
  }
  }

  allPosts(): Observable<Post[]> {
    return this.posts$ = this.postService.getAllPosts().pipe(
      catchError((error) => {
        console.log("allposts", error);
        return of();
      })
    )
  };

  onSubmit() {
    if (this.postForm.valid) {
      const text = this.postForm.get('text')?.value;
      const userId = this.localStorage.getLocalStorage("user");
      this.postService.addPost(text, userId).pipe(
        switchMap(() => this.allPosts()),
        catchError(error => {
          console.log("error", error)
          return of([]);
        }))
        .subscribe((response) => {
          if (response) {
            this.postForm.reset();
          }
        })
    }
  }

  ngOnInit() {
    this.allPosts().subscribe(posts => {
      console.log("posts", posts);
    });

  }
}
