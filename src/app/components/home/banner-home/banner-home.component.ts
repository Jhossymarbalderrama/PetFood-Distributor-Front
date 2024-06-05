import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-home',
  templateUrl: './banner-home.component.html',
  styleUrls: ['./banner-home.component.css']
})
export class BannerHomeComponent {
  public imgLogo: string = '../../../../assets/img/logo.webp';
  public imgLogoCat: string = '../../../../assets/img/logo-cat.webp';
}
