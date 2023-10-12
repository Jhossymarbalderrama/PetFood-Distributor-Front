import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner-corporation',
  templateUrl: './banner-corporation.component.html',
  styleUrls: ['./banner-corporation.component.css']
})
export class BannerCorporationComponent {
  banner: string = "";
  
  constructor(private router: Router){     
    this.banner = (router.url.split("/"))[2];      
  }
}
