import { Component } from '@angular/core';

@Component({
  selector: 'app-food-wet-cat',
  templateUrl: './food-wet-cat.component.html',
  styleUrls: ['./food-wet-cat.component.css']
})
export class FoodWetCatComponent {
  data:any = [];

  private titles = ['Nutrición Superior', 'Delicias Gourmet', 'Calidad Premium'];
  private descriptions = ['Bolsa de alimento para gatos', 'Nutrición completa y equilibrada', 'Ingredientes de alta calidad'];


  constructor(){
    for (let i = 0; i < 10; i++) {
      let randomTitleIndex = Math.floor(Math.random() * this.titles.length);
      let randomDescriptionIndex = Math.floor(Math.random() * this.descriptions.length);

      let food =  {
        title: this.titles[randomTitleIndex],
        description: this.descriptions[randomDescriptionIndex],
        img: `../../../../assets/img/foods/food_wet_cat/${i+1}.webp`
      }

      this.data.push(food);
    }
  }
}
