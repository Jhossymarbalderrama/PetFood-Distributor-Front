import { Component } from '@angular/core';

@Component({
  selector: 'app-food-dry-dog',
  templateUrl: './food-dry-dog.component.html',
  styleUrls: ['./food-dry-dog.component.css']
})
export class FoodDryDogComponent {
  data:any = [];

  private titles = ['Salud y Vitalidad', 'Sabor Inigualable', 'Nutrición Balanceada'];
  private descriptions = ['Alimento seco para perros', 'Con ingredientes naturales', 'Rico en proteínas y vitaminas'];


  constructor(){
    for (let i = 0; i < 11; i++) {
      let randomTitleIndex = Math.floor(Math.random() * this.titles.length);
      let randomDescriptionIndex = Math.floor(Math.random() * this.descriptions.length);

      let food =  {
        title: this.titles[randomTitleIndex],
        description: this.descriptions[randomDescriptionIndex],
        img: `../../../../assets/img/foods/food_dry_dog/${i+1}.webp`
      }

      this.data.push(food);
    }
  }
}
