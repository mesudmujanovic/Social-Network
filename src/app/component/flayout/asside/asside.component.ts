import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Image } from 'src/app/interface/Image-interface';
import { User } from 'src/app/interface/User-interface';
import { AddFriendsService } from 'src/app/service/add-friends.service';
import { ImageService } from 'src/app/service/image.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { LoginService } from 'src/app/service/login.service';
import { PostService } from 'src/app/service/post.service';
import { VerifyService } from 'src/app/service/verify.service';

@Component({
  selector: 'app-asside',
  templateUrl: './asside.component.html',
  styleUrls: ['./asside.component.css']
})
export class AssideComponent {

  getAllUsers$: Observable<User[]>
  getAllImageUsers: string[]=[];
  getAllverName: Observable<Image[]>

  
  constructor(private postService: PostService,
    private localStorage: LocalStorageService,
    private loginService: LoginService,
    private verifyService: VerifyService,
    private addFriends: AddFriendsService,
    private imageService: ImageService) { }

    
  allImages(){ 
    return this.imageService.getAllImages().subscribe(
      (response: Image[]) =>{
        console.log("allimages",response);
        this.getAllImageUsers = response.map(response => 'data:image/jpeg;base64,' + response);
      }
    )     
  }

  allImagesName(): Observable<Image[]>{
    return this.getAllverName = this.imageService.getImageVerName().pipe(
      tap( response =>{
       console.log("response",response);
       
      })
    )
  }

  ngOnInit():void{
    this.allImages()
    this.allImagesName().subscribe()
  }

}
