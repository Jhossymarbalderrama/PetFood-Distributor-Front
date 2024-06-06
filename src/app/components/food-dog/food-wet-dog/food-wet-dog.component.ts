import { Component } from '@angular/core';

@Component({
  selector: 'app-food-wet-dog',
  templateUrl: './food-wet-dog.component.html',
  styleUrls: ['./food-wet-dog.component.css']
})
export class FoodWetDogComponent {
  data:any = [];

  private titles = ['Salud y Vitalidad', 'Sabor Inigualable', 'Nutrición Balanceada'];
  private descriptions = ['Alimento seco para perros', 'Con ingredientes naturales', 'Rico en proteínas y vitaminas'];


  constructor(){
    for (let i = 0; i < 4; i++) {
      let randomTitleIndex = Math.floor(Math.random() * this.titles.length);
      let randomDescriptionIndex = Math.floor(Math.random() * this.descriptions.length);

      let food =  {
        title: this.titles[randomTitleIndex],
        description: this.descriptions[randomDescriptionIndex],
        img: `../../../../assets/img/foods/food_wet_dog/${i+1}.webp`
      }

      this.data.push(food);
    }
  }
}
