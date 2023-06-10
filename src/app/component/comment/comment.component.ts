// import { Component, Input } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Observable } from 'rxjs';
// import { Comment } from 'src/app/interface/Comment-interface';
// import { CommentsService } from 'src/app/service/comments.service';
// import { LocalStorageService } from 'src/app/service/local-storage.service';

// @Component({
//   selector: 'app-comment',
//   templateUrl: './comment.component.html',
//   styleUrls: ['./comment.component.css']
// })
// export class CommentComponent {
 

//   commForm: FormGroup
//   comment$: Observable<Comment[]>;
 
//   constructor(private formBuilder: FormBuilder,
//     private localStorage: LocalStorageService,
//     private commentService: CommentsService) {

//     this.commForm = this.formBuilder.group({
//       text:['',Validators.required]
//     })
//   }

//   onSubmit(){
//   if(this.commForm.valid){
//     const text = this.commForm.get('text')?.value;
//     const userId = this.localStorage.getLocalStorage("user");
//   }
//   }

// }