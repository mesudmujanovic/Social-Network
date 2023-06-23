import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, catchError, distinctUntilChanged, map, of, switchMap, take, tap } from 'rxjs';
import { Post } from 'src/app/interface/Post-interface';
import { Verify } from 'src/app/interface/Verify-interface';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { PostService } from 'src/app/service/post.service';
import { VerifyService } from '../../service/verify.service';
import { CommentService } from 'src/app/service/comment.service';
import { Comment } from 'src/app/interface/Comment-interface';
import { Router } from '@angular/router';
import { LikePostService } from 'src/app/service/like-post.service';

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
  verifyName: string;
  verifyId: number;
  allComments$: Observable<Comment[]>;
  posts: { [postId: number]: Comment[] } = {};
  postCountLike: number;
  postCountDislike: number; 
  postId: number;
  counteLike: number = 0;
  counteDislike: number = 0
  
  constructor(private formBuilder: FormBuilder,
    private localStorage: LocalStorageService,
    private postService: PostService,
    private router: Router,
    private commentService: CommentService,
    private verifyService: VerifyService,
    private likePostService: LikePostService) {

    this.postForm = this.formBuilder.group({
      postText: ['', Validators.required]
    });

    this.commentForm = this.formBuilder.group({
      commentText: ['', Validators.required]
    });
  }

  getLikeOrDislike(postId: number) {
   console.log("thisPostId", this.postId);
   this.postId = postId;
    this.likePostService.addLike( this.postCountLike, this.postCountDislike, this.postId, this.verifyId ).pipe(
      tap( response =>{
        console.log("responseLike",response);
      })
    ).subscribe( response =>{
      console.log("subsrcieLike",response);
      
    })
  }

  addLike(){
  this.counteLike ++;
  }

  addDislike(){
    this.counteDislike ++;
  }


  getClickedPost(postId: number) {
    this.clickedPost = postId;
    console.log("this.cliced", this.clickedPost);
    
  }

  onPost() {
    if (this.postForm.valid) {
      const postText = this.postForm.value.postText;
      const postName = this.localStorage.getLocalStorage('name')
      const id = this.localStorage.getLocalStorage('verifyId');
      this.postService.addPostToNgrx(postText);
      this.postService.addPost(postText, postName, id).pipe(
        tap(response => {
          const postId = response.id
          this.localStorage.setLocalStorage('postId',postId)
        }),
         catchError( (error) => {
          console.log("errorPost", error);
          alert("Morate prvo popuniti informacije o vama!");
          this.router.navigate(['/verify']);
          return of([])
         }),
        switchMap(() => this.allPosts()),
      ).subscribe(posts => {
        console.log("posts", posts);
      })
    }
  };

  onComment() {
    if (this.commentForm.valid) {
      const commentText = this.commentForm.value.commentText;
      const verId = this.localStorage.getLocalStorage('verifyId');
      this.postId = this.clickedPost;
      this.commentService.addCommentToNgrx(commentText);
      this.commentService.addComment(commentText, this.verifyName, this.postId, verId).pipe(
        tap(response => {
        }),
        switchMap(() => this.allComments()),
        catchError((error) => {
          console.log("eror", error);
          return of([]);
        })
      ).subscribe();

    }
  }

  allComments(): Observable<Comment[]> {
    return this.allComments$ = this.commentService.getAllComments().pipe(
      tap(comments => {
        console.log(comments);
        comments.forEach(comment => {
          //all postId from Comment
          const postId = comment.postId;
       
          if (postId in this.posts) {
            const existingComments = this.posts[postId];
            //existence two indentic comment in one post
            //no reply comment
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

  allPosts(): Observable<Post[]> {
    return this.allPosts$ = this.postService.getAllPosts().pipe(
      catchError((error) => {
        console.log("error", error);
        return of();
      })
    )
  }

  getVerifyByUserName(): Observable<Verify>{
    return this.verifyService.getByVerifyName(this.verifyName).pipe(
      tap( response =>{})
    )
  }

  getVerifyById(): Observable<Verify>{
    return this.verifyService.getVerifybyId(this.verifyId).pipe(
      tap ( response => {
      })
    )
  }

  ngOnInit(): void {
     
    this.verifyName = this.localStorage.getLocalStorage("name")

    this.getVerifyByUserName().subscribe( byVerify =>{
      this.verifyId = byVerify.id;
      this.localStorage.setLocalStorage("verifyId", this.verifyId)    
    })

    this.allPosts().subscribe(posts => console.log("allPosts", posts));

    this.allComments().subscribe();
    
    this.getVerifyById().subscribe()
    
  }
}

