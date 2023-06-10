import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, catchError, map, of, switchMap, tap } from 'rxjs';
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
  comments$: Observable<Comment[]>;
  postId: number;
  selectedPostComments$: { [postId: number]: Comment[] } = {};

  constructor(private formBuilder: FormBuilder,
    private postService: PostService,
    private localStorage: LocalStorageService,
    private commentService: CommentsService) {

    this.postForm = this.formBuilder.group({
      text: ['', Validators.required]
    })
    this.commForm = this.formBuilder.group({
      text:['',Validators.required]
    });

    this.commForm = this.formBuilder.group({
      text:['',Validators.required]
    })
  }

  getPostId(post: Post) {
    this.postId = post.id;
    if (!this.selectedPostComments$.hasOwnProperty(post.id)) {
      this.selectedPostComments$[post.id] = [];
    }
    this.commentService.getCommentsByPostId(post.id)
      .pipe(
        catchError((error) => {
          console.log('error', error);
          return of([]);
        })
      )
      .subscribe((comments) => {
        this.selectedPostComments$[post.id] = comments;
      });
     }
  
     onSubmitComment() {
      if (this.commForm.valid) {
        const text = this.commForm.get('text')?.value;
        const userId = this.localStorage.getLocalStorage('user');
        const postId = this.postId;
    
        this.commentService.addComment(postId, text, userId)
          .pipe(
            switchMap(() => this.commentService.getCommentsByPostId(postId)),
            catchError((error) => {
              console.log('error', error);
              return of([]);
            })
          )
          .subscribe((comments) => {
            this.selectedPostComments$[postId] = comments;
            this.commForm.reset();
          });
      }
    }
    
    allComments(): Observable<Comment[]>{
      return this.comments$ = this.commentService.getCommentsAll().pipe(
        catchError( (error) =>{
          console.log("error",error);
          return of([]);
        })
      )
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
    this.allComments().subscribe( comments => {
      console.log("comments", comments);
    });
    this.posts$ = this.allPosts();
  }
}
