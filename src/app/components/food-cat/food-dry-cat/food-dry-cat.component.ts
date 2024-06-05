import { Component } from '@angular/core';

@Component({
  selector: 'app-food-dry-cat',
  templateUrl: './food-dry-cat.component.html',
  styleUrls: ['./food-dry-cat.component.css']
})
export class FoodDryCatComponent {

  data:any = [];

  constructor(){
    for (let i = 0; i < 18; i++) {
      let food =  {
        title: 'Lorem Ipsum Family',
        description: 'Lorem Ipsum is simply dummy text',
        img: `../../../../assets/img/foods/food_dry_cat/${i+1}.webp`
      }

      this.data.push(food);
    }
  }
  
}
