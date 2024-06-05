import { Component, ElementRef, HostListener, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider";

@Component({
  selector: 'app-food-cat-slider',
  templateUrl: './food-cat-slider.component.html',
  styleUrls: [
    "../../../../../../node_modules/keen-slider/keen-slider.min.css",
    './food-cat-slider.component.css']
})
export class FoodCatSliderComponent implements OnInit, AfterViewInit{
  @ViewChild("sliderRef", {read: ElementRef}) private sliderRef: ElementRef<HTMLElement> | any; 

  data: any = [];
  slider: KeenSliderInstance | any;
  currentSlide: number = 1;
  dotHelper: Array<Number> | any = [];

  screenWidth: any = window.innerWidth;
  screenWidthStatic: any = window.screen.width;

  viewSlider: boolean = false;
  constructor() {
    for (let i = 0; i < 10; i++) {
        let item = {
          img: `../../../../../assets/img/foods/food_wet_cat/${i+1}.webp`,
          description:'Lorem Ipsum is simply dummy text'
        }   
        
        this.data.push(item);
    }
  }
  
  ngOnInit(){
    this.viewSlider = true;    
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;


    if (this.screenWidth >= 1024) {         
      this.slider.options.slides.perView = 5;
    }else if (this.screenWidth >= 768 && this.screenWidth < 1024){
      this.slider.options.slides.perView = 4;
    } else if (this.screenWidth < 768) {           
      this.slider.options.slides.perView = 1;
    }
  }

  ngAfterViewInit(): void {
    
    setTimeout(() => {
      if(this.screenWidth >= 1024){
        this.slider = new KeenSlider(this.sliderRef.nativeElement, {
          initial: this.currentSlide,
          slideChanged: (s) => {
            this.currentSlide = s.track.details.rel;
          },
          loop: true,
          mode: "free",
          slides: {        
            perView: 5,
            spacing: 15
          }
        });
      }else if (this.screenWidth >= 768 && this.screenWidth < 1024){
        this.slider = new KeenSlider(this.sliderRef.nativeElement, {
          initial: this.currentSlide,
          slideChanged: (s) => {
            this.currentSlide = s.track.details.rel;
          },
          loop: true,
          mode: "free",
          slides: {        
            perView: 4,
            spacing: 15
          }
        });
      }else if(this.screenWidth < 768){
        this.slider = new KeenSlider(this.sliderRef.nativeElement, {
          initial: this.currentSlide,
          slideChanged: (s) => {
            this.currentSlide = s.track.details.rel;
          },
          loop: true,
          mode: "free",
          slides: {        
            perView: 1,
            spacing: 15
          }
        });
      }
      
      this.dotHelper = [...Array(this.slider.track.details.slides.length).keys()];
    }, 1500);
  }  

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
}

