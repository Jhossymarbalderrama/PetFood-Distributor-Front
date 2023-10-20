import { Component, ElementRef, HostListener, OnInit} from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private elementRef: ElementRef) {

  }

  ngOnInit(): void {
    AOS.init()
    window.addEventListener('load', AOS.refresh);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void{
    const yOffset = window.scrollY;

    if (yOffset <= 20){
      (this.elementRef.nativeElement.querySelector('#icon-up')).classList.add('icon-up')
    }else{
      (this.elementRef.nativeElement.querySelector('#icon-up')).classList.remove('icon-up')      
    }      
  }
  
  ngScrollToTop():void{
    window.scrollTo(0,0);
  }
}
