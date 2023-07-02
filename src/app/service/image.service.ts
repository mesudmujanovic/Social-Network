import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../interface/Image-interface';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }


  uploadImage(formData: FormData): Observable<Image> {
  
    // console.log('Sadržaj slike:', formData.get('file'));
    // console.log('nameImage:', formData.get('verName'));
    return this.http.post<Image>(`${this.baseUrl}/upload`, formData);
  }
  

  getAllImages(): Observable<Image[]> {
    return this.http.get<Image[]>(`${this.baseUrl}/allImages`);
  }

  getImageById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/images/${id}`, { responseType: 'text' });
  }

  getImageByName( verName: string ): Observable<any>{
    return this.http.get(`${this.baseUrl}/getImages/${verName}`, { responseType: 'text' })
  }


}
