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

  uploadImage(file: File): Observable<Image> {
    const formData = new FormData();
    formData.append('file', file);
    console.log('Sadržaj slike:', formData.get('file'));
    console.log('UserID:', formData.get('userId'));
    return this.http.post<Image>(`${this.baseUrl}/upload`, formData);
  }
  

  getAllImages(): Observable<Image[]> {
    return this.http.get<Image[]>(`${this.baseUrl}/allImages`);
  }

  getImageById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/images/${id}`, { responseType: 'text' });
  }


}
