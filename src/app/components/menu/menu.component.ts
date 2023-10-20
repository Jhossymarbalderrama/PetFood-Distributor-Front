import { Component, HostListener, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  constructor(private elementRef: ElementRef){

  }

  ngOnInit():void{

  }

  @HostListener('window: scroll', ['$event'])
  onScroll(event: Event): void{
    const yOffset = window.scrollY;

    if(yOffset > 20){
      (this.elementRef.nativeElement.querySelector('#nav')).classList.add('navbar-solid');
    }else{
      (this.elementRef.nativeElement.querySelector('#nav')).classList.remove('navbar-solid');
    }
  }
}
