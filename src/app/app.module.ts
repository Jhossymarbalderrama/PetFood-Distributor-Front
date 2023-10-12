import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { CorporateComponent } from './components/corporate/corporate.component';
import { BannerFoodCatComponent } from './components/food-cat/banner-food-cat/banner-food-cat.component';
import { FoodDryCatComponent } from './components/food-cat/food-dry-cat/food-dry-cat.component';
import { FoodWetCatComponent } from './components/food-cat/food-wet-cat/food-wet-cat.component';
import { BannerFoodDogComponent } from './components/food-dog/banner-food-dog/banner-food-dog.component';
import { FoodDryDogComponent } from './components/food-dog/food-dry-dog/food-dry-dog.component';
import { FoodWetDogComponent } from './components/food-dog/food-wet-dog/food-wet-dog.component';
import { ContactComponent } from './components/contact/contact.component';
import { BannerContactComponent } from './components/contact/banner-contact/banner-contact.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerFooterComponent } from './components/footer/banner-footer/banner-footer.component';
import { WhatWeDoComponent } from './components/home/what-we-do/what-we-do.component';
import { InspiringComponent } from './components/home/inspiring/inspiring.component';
import { OurNutritionComponent } from './components/home/our-nutrition/our-nutrition.component';
import { BannerHomeComponent } from './components/home/banner-home/banner-home.component';
import { MenuItemsComponent } from './components/menu/menu-items/menu-items.component';
import { AnimalLinkValueComponent } from './components/home/animal-link-value/animal-link-value.component';
import { StoreHomeSliderComponent } from './components/home/store-home-slider/store-home-slider.component';
import { FoodCatSliderComponent } from './components/home/store-home-slider/food-cat-slider/food-cat-slider.component';
import { FoodDogSliderComponent } from './components/home/store-home-slider/food-dog-slider/food-dog-slider.component';
import { BannerCorporationComponent } from './components/corporate/banner-corporation/banner-corporation.component';
import { AboutComponent } from './components/corporate/about/about.component';
import { HistoryComponent } from './components/corporate/history/history.component';
import { CatalogComponent } from './components/corporate/catalog/catalog.component';
import { ExportComponent } from './components/corporate/export/export.component';
import { AboutAlltechComponent } from './components/corporate/about-alltech/about-alltech.component';
import { DealershipComponent } from './components/corporate/dealership/dealership.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CorporateComponent,
    BannerFoodCatComponent,
    FoodDryCatComponent,
    FoodWetCatComponent,
    BannerFoodDogComponent,
    FoodDryDogComponent,
    FoodWetDogComponent,
    ContactComponent,
    BannerContactComponent,
    ErrorPageComponent,
    FooterComponent,
    BannerFooterComponent,
    WhatWeDoComponent,
    InspiringComponent,
    OurNutritionComponent,
    BannerHomeComponent,
    MenuItemsComponent,
    AnimalLinkValueComponent,
    StoreHomeSliderComponent,
    FoodCatSliderComponent,
    FoodDogSliderComponent,
    BannerCorporationComponent,
    AboutComponent,
    HistoryComponent,
    CatalogComponent,
    ExportComponent,
    AboutAlltechComponent,
    DealershipComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
