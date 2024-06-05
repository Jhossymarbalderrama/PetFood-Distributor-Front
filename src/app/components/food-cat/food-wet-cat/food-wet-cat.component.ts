import { Component } from '@angular/core';

@Component({
  selector: 'app-food-wet-cat',
  templateUrl: './food-wet-cat.component.html',
  styleUrls: ['./food-wet-cat.component.css']
})
export class FoodWetCatComponent {
  data:any = [];

  constructor(){
    for (let i = 0; i < 10; i++) {
      let food =  {
        title: 'Lorem Ipsum Family',
        description: 'Lorem Ipsum is simply dummy text',
        img: `../../../../assets/img/foods/food_wet_cat/${i+1}.webp`
      }

      this.data.push(food);
    }
  }
}
