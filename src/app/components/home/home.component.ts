import { Component,  HostListener, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private elementRef: ElementRef){

  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void{
    const yOffset = window.scrollY;

    if (yOffset <= 100){
      (this.elementRef.nativeElement.querySelector('#icon-up')).classList.add('icon-up')
    }else{
      (this.elementRef.nativeElement.querySelector('#icon-up')).classList.remove('icon-up')
    }  
  }
}
