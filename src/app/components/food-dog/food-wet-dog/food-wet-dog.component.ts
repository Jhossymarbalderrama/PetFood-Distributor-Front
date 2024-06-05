import { Component } from '@angular/core';

@Component({
  selector: 'app-food-wet-dog',
  templateUrl: './food-wet-dog.component.html',
  styleUrls: ['./food-wet-dog.component.css']
})
export class FoodWetDogComponent {
  data:any = [];

  constructor(){
    for (let i = 0; i < 4; i++) {
      let food =  {
        title: 'Lorem Ipsum Family',
        description: 'Lorem Ipsum is simply dummy text',
        img: `../../../../assets/img/foods/food_wet_dog/${i+1}.webp`
      }

      this.data.push(food);
    }
  }
}
