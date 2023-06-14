import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, catchError, map, of, switchMap, take, tap } from 'rxjs';
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
  allComments$: Observable<Comment[] >;
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
  
  

  onComment() {
    if (this.commentForm.valid) {
      const commentText = this.commentForm.value.commentText;
      const commentName = this.localStorage.getLocalStorage('name');
      const postId = this.clickedPost;
      const verId = this.localStorage.getLocalStorage('verifyId');
  
      this.commentService.addComment(commentText, commentName, postId, verId)
        .subscribe((response: any) => {
          console.log("response", response);
          const comment: Comment = {
            id: response.id,
            userId: response.userId,
            postId: postId,
            commentText: commentText,
            commentName: commentName,
            verId: verId
          };
  
          if (this.posts.hasOwnProperty(postId)) {
            this.posts[postId].push(comment);
          } else {
            this.posts[postId] = [comment];
          }
  
          this.commentForm.reset();
        }, error => {
          console.log("error", error);
        });
    }
  }
  
  
  

  
  
  allComments(): Observable<any> {
    return this.allComments$ = this.commentService.getAllComments().pipe(
      tap(comments => {
        console.log(comments);
      }),
      catchError(error => {
        console.log("error", error);
        return of([]);
      })
    )
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
    this.allPosts().subscribe(posts =>  console.log("allPosts", posts));
    
    this.allComments().subscribe( comments => console.log("allComments", comments))
  }

}

