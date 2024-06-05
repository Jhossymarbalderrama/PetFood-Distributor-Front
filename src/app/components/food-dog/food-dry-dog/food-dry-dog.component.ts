import { Component } from '@angular/core';

@Component({
  selector: 'app-food-dry-dog',
  templateUrl: './food-dry-dog.component.html',
  styleUrls: ['./food-dry-dog.component.css']
})
export class FoodDryDogComponent {
  data:any = [];

  constructor(){
    for (let i = 0; i < 11; i++) {
      let food =  {
        title: 'Lorem Ipsum Family',
        description: 'Lorem Ipsum is simply dummy text',
        img: `../../../../assets/img/foods/food_dry_dog/${i+1}.webp`
      }

      this.data.push(food);
    }
  }
}
