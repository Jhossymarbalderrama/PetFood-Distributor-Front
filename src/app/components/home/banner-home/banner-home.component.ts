import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-home',
  templateUrl: './banner-home.component.html',
  styleUrls: ['./banner-home.component.css']
})
export class BannerHomeComponent {
  imgLogo: string = '../../../../assets/img/logo.webp';
  imgLogoCat: string = '../../../../assets/img/logo-cat.webp';
  title: string = 'Pet Food Premium';
}
