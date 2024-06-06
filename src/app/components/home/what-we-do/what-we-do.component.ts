import { Component } from '@angular/core';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.css']
})
export class WhatWeDoComponent {
  imgHistories: string = '../../../../assets/img/histories.webp';

  data: any = {
    title:'Pet Food Premium',
    subtitle:'Proveemos calidad',
    subtitleDes:'Variedades en alimentos y accesorios para el bienestar de tus mascotas',
    description:'',
    
    categories: [
      {
        title:'Alimentos Premium',
        description:'Nutrición óptima para todas las etapas de vida de tus mascotas.'
      },
      {
        title:'Snacks y Premios',
        description:'Deliciosos bocadillos para entrenar y consentir a tus mascotas.'
      },
      {
        title:'Accesorios y Juguetes',
        description:'Diversión y bienestar con nuestros juguetes y accesorios de calidad.'
      },
      {
        title:'Higiene y Cuidado',
        description:'Productos esenciales para mantener a tus mascotas limpias y saludables.'
      },
      {
        title:'Salud y Suplementos',
        description:'Vitaminas y suplementos para una vida larga y saludable.'
      },
    ]
  }
  
}
