import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Image } from 'src/app/interface/Image-interface';
import { User } from 'src/app/interface/User-interface';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-asside',
  templateUrl: './asside.component.html',
  styleUrls: ['./asside.component.css']
})
export class AssideComponent {

  getAllUsers$: Observable<User[]>
  getAllImageUsers: string[] = [];
  getAllverName: Observable<Image[]>

  constructor(private imageService: ImageService) { }

  allImages() {
    return this.imageService.getAllImages().subscribe(
      (response: Image[]) => {
        this.getAllImageUsers = response.map(response => 'data:image/jpeg;base64,' + response);
      }
    )
  }

  allImagesName(): Observable<Image[]> {
    return this.getAllverName = this.imageService.getImageVerName().pipe(
      tap(response => {
      })
    )
  }

  ngOnInit(): void {
    this.allImages()
    this.allImagesName().subscribe()
  }

}
