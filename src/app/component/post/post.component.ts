import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
   
  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private postService: PostService,
    private localStorage: LocalStorageService) {

    this.postForm = this.formBuilder.group({
      text: ['', Validators.required]
    })
  }

  onSubmit(){
    if( this.postForm.valid ){
      const text = this.postForm.get('text')?.value;
      console.log("text",text);
      
      const userId = this.localStorage.getLocalStorage("user");
      this.postService.addPost( text, userId ).pipe(
        tap( response => {
          console.log("response", response);
        })
      ).subscribe( () =>{
        console.log();
      })
    }
  }

  ngOnInit(){

  }
}
