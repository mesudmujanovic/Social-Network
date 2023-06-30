import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from 'src/app/interface/Image-interface';
import { ImageService } from 'src/app/service/image.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImagesComponent implements OnInit {
  selectedFile: File | null = null;
  images: Image[];
  imagesId: Image;
  imageId: number
  imageSrc: any;
  imageName: string;

  constructor(private imageService: ImageService, 
    private localStorage: LocalStorageService) { }

  ngOnInit() {
    this.imageService.getAllImages().subscribe(
      (data: Image[]) => {
        this.images = data;
        this.loadImage();
      },
      (error) => {
        console.log(error);
      }
    );

  
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadImage(){
    if (this.selectedFile) {
    this.imageService.uploadImage(this.selectedFile).subscribe(
        (res: Image) => {
         this.imageId = res.id;
         this.localStorage.setLocalStorage('imageId', this.imageId);
         this.loadImage();
        },
        (error) => {
          console.error('Error uploading image:', error);
        }
      );
    }
  }

  loadImage() {
    this.imageId = this.localStorage.getLocalStorage('imageId');
    this.imageService.getImageById(this.imageId).subscribe(
      (response: any) => {
        this.imageSrc = 'data:image/jpeg;base64,' + response;
      },
      (error) => {
        console.error('Error retrieving image:', error);
      }
    );
  }

  getImageUrl(content: string): string {
    return 'data:image/jpeg;base64,' + content;
  }

}
