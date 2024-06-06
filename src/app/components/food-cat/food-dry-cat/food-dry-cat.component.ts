import { Component } from '@angular/core';

@Component({
  selector: 'app-food-dry-cat',
  templateUrl: './food-dry-cat.component.html',
  styleUrls: ['./food-dry-cat.component.css']
})
export class FoodDryCatComponent {

  data:any = [];

  private titles = ['Nutrición Superior', 'Delicias Gourmet', 'Calidad Premium'];
  private descriptions = ['Bolsa de alimento para gatos', 'Nutrición completa y equilibrada', 'Ingredientes de alta calidad'];


  constructor(){
    for (let i = 0; i < 18; i++) {
      let randomTitleIndex = Math.floor(Math.random() * this.titles.length);
      let randomDescriptionIndex = Math.floor(Math.random() * this.descriptions.length);

      let food =  {
        title: this.titles[randomTitleIndex],
        description: this.descriptions[randomDescriptionIndex],
        img: `../../../../assets/img/foods/food_dry_cat/${i+1}.webp`
      }

      this.data.push(food);
    }
  }
  
}
