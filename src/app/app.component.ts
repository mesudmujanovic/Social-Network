import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fr';
  isProfileRoute: boolean;

  constructor(private router: Router,
    private http: HttpClient) {
    // pretplata na events navigaciju
   this.router.events.subscribe( (event) =>{
    if(event instanceof NavigationEnd){
      //navigationEnd je klasa koja se emituje kada se ucita /profile u potpunosti
      this.isProfileRoute = this.router.url.includes('/profile');
    }
   })
};



}
