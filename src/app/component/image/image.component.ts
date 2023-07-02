import { Component, OnInit } from '@angular/core';
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
  verName: string;
  imageVerName: string;

  constructor(private imageService: ImageService, 
    private localStorage: LocalStorageService) { }

  ngOnInit() {
    this.verName = this.localStorage.getLocalStorage("name");

    this.imageService.getAllImages().subscribe(
      (data: Image[]) => {
        this.images = data;
        console.log("imag",data);
        
        this.getName()
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
      const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('verName', this.verName);
    this.imageService.uploadImage(formData).subscribe(
        (res: Image) => {
         this.imageId = res.id;
         this.localStorage.setLocalStorage('imageId', this.imageId);
         console.log("res",res);
         this.getName();
      //  this.loadImage();
      },
        (error) => {
          console.error('Error uploading image:', error);
        }
      );
    }
  }

  getName(){
    this.imageService.getImageByName(this.verName).subscribe(
      (response: any) => {
        this.imageVerName = 'data:image/jpeg;base64,' + response;
        console.log("this.getName",this.imageVerName);
      },
      (error) => {
        console.error('Error retrieving image:', error);
      }
    )
  }

  loadImage() {
    this.imageId = this.localStorage.getLocalStorage('imageId');
    this.imageService.getImageById(this.imageId).subscribe(
      (response: any) => {
        this.imageSrc = 'data:image/jpeg;base64,' + response;
        console.log("imageserc",this.imageSrc);
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
