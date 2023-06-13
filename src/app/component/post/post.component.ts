import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take, tap } from 'rxjs';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
   
  postForm: FormGroup
  allPost: []
 
  constructor(private formBuilder: FormBuilder,
              private localStorage: LocalStorageService,
              private postService: PostService){
   
    this.postForm = this.formBuilder.group({
      postText: [ '', Validators.required ]
    })
  }

  onPost(){
    if( this.postForm) {
      const post = this.postForm.value;
      const id = this.localStorage.getLocalStorage('verifyId');
      this.postService.addPost( post, id ).pipe(
        tap( response =>{
          console.log("res", response);
          console.log("idVer",id);
          
        })
      ).subscribe( () =>{
        console.log();
      })
    }
  }
}
