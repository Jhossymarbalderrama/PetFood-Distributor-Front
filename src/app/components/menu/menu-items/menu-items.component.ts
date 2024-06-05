import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent {
 isMenuOpen: boolean = false;
 
  public imgLogo: string = '../../../../assets/img/logo.webp';

 toggleMenu(): void{
    this.isMenuOpen = !this.isMenuOpen; 
 }

 constructor(private Router: Router){

 }

 
//  nav-toggle > burger
// links  > menu
// nav-item > menu-item
}

