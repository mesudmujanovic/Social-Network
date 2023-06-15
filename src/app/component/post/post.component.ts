import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, catchError, distinctUntilChanged, map, of, switchMap, take, tap } from 'rxjs';
import { Post } from 'src/app/interface/Post-interface';
import { Verify } from 'src/app/interface/Verify-interface';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { PostService } from 'src/app/service/post.service';
import { VerifyService } from '../../service/verify.service';
import { HttpClient } from '@angular/common/http';
import { CommentService } from 'src/app/service/comment.service';
import { Comment } from 'src/app/interface/Comment-interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
   
  postForm: FormGroup
  allPosts$: Observable<Post[]>;
  verifySave: Verify[];
  commentForm: FormGroup;
  clickedPost: number;
  allComments$: Observable<Comment[]>;
  posts: { [postId: number]: Comment[] } = {};


  constructor(private formBuilder: FormBuilder,
              private localStorage: LocalStorageService,
              private postService: PostService,
              private verifyService: VerifyService,
              private http: HttpClient,
              private commentService: CommentService){
   
                this.postForm = this.formBuilder.group({
                  postText: ['', Validators.required]
                });

                this.commentForm = this.formBuilder.group({
                  commentText: ['', Validators.required]
                });
  }

  getClickedPost(postId: number) {
    this.clickedPost = postId;
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

  onComment() {
    if (this.commentForm.valid) {
      const commentText = this.commentForm.value.commentText;
      const commentName = this.localStorage.getLocalStorage('name');
      const verId = this.localStorage.getLocalStorage('verifyId');
      const postId = this.clickedPost;
        this.commentService.addComment(commentText, commentName, postId, verId).pipe(
          tap(response => {
            console.log("responsePost", response)
          }),
          switchMap( () => this.allComments() ),
          catchError( (error) =>{
            console.log("eror",error);
            return of([]);
          })
        ).subscribe(comments => console.log("comments", comments));
      
    }
  }
  

allComments(): Observable<Comment[]> {
  return this.allComments$ = this.commentService.getAllComments().pipe(
    distinctUntilChanged(),
    tap(comments => {
      console.log(comments);
      comments.forEach(comment => {
        const postId = comment.postId;
        if (postId in this.posts) {
          const existingComments = this.posts[postId];
          if (!existingComments.some(c => c.id === comment.id)) {
            existingComments.push(comment);
          }
        } else {
          this.posts[postId] = [comment];
        }
      });
    }),
    catchError(error => {
      console.log("error", error);
      return of([]);
    })
  );
}


  // allComments(): Observable<Comment[]> {
  //   return this.allComments$ = this.commentService.getAllComments().pipe(
  //     tap(comments => {
  //       console.log(comments);
  //       comments.forEach(comment => {
  //         const postId = comment.postId;
  //         if (postId in this.posts) {
  //           this.posts[postId].push(comment);
  //         } else {
  //           this.posts[postId] = [comment];
  //         }
  //       });
  //     }),
  //     catchError(error => {
  //       console.log("error", error);
  //       return of([]);
  //     })
  //   );
  // }
  


  allPosts(): Observable<Post[]>{
    return this.allPosts$ = this.postService.getAllPosts().pipe(
      catchError( (error) =>{
        console.log("error",error);
      return of();
      })
    )
  }
  
  ngOnInit(): void{
    this.allPosts().subscribe(posts => console.log("allPosts", posts));
  
    this.allComments().subscribe();
 }
}

