import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/corporate/about/about.component';
import { HistoryComponent } from './components/corporate/history/history.component';
import { CatalogComponent } from './components/corporate/catalog/catalog.component';
import { ExportComponent } from './components/corporate/export/export.component';
import { AboutAlltechComponent } from './components/corporate/about-alltech/about-alltech.component';
import { DealershipComponent } from './components/corporate/dealership/dealership.component';
import { FoodDryCatComponent } from './components/food-cat/food-dry-cat/food-dry-cat.component';
import { FoodWetCatComponent } from './components/food-cat/food-wet-cat/food-wet-cat.component';
import { FoodDryDogComponent } from './components/food-dog/food-dry-dog/food-dry-dog.component';
import { FoodWetDogComponent } from './components/food-dog/food-wet-dog/food-wet-dog.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"home",component: HomeComponent},
  {path:"corporate/nosotros",component: AboutComponent},
  {path:"corporate/historia",component: HistoryComponent},
  {path:"corporate/catalogo",component: CatalogComponent},
  {path:"corporate/exportacion",component: ExportComponent},
  {path:"corporate/empresa",component: AboutAlltechComponent},
  {path:"corporate/contratanos",component: DealershipComponent},
  {path:"foods/dry-cat",component: FoodDryCatComponent},
  {path:"foods/wet-cat",component: FoodWetCatComponent},
  {path:"foods/dry-dog",component: FoodDryDogComponent},
  {path:"foods/wet-dog",component: FoodWetDogComponent},
  {path:"contact",component: ContactComponent},
  {path:"**",component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
