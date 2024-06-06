import { Component } from '@angular/core';

@Component({
  selector: 'app-our-nutrition',
  templateUrl: './our-nutrition.component.html',
  styleUrls: ['./our-nutrition.component.css']
})
export class OurNutritionComponent {
  imgServices: string = '../../../../assets/img/services.webp';

  data: any = {
    title:`Nuestros Servicios`,
    description: 'Nuestro compromiso es proporcionar atención integral y de calidad, asegurando el bienestar y la felicidad de tus compañeros animales.',
    services: [
      {
        title:'Asesoría Nutricional',
        description:'Consulta personalizada para elegir la mejor dieta según la raza, edad y estado de salud de tu mascota',
        icon: 'fa-solid fa-vials'
      },
      {
        title:'Envío a Domicilio',
        description:'Rápido y cómodo, entrega de productos directamente en la puerta de tu casa',
        icon: 'fa-solid fa-leaf'
      },
      {
        title:'Programas de Fidelidad',
        description:'Obtén descuentos y recompensas exclusivas al ser parte de nuestro club de clientes',
        icon: 'fa-solid fa-bone'
      },
      {
        title:'Capacitación y Entrenamiento',
        description:'Sesiones de entrenamiento para fomentar la obediencia y el buen comportamiento de tu mascota',
        icon: 'fa-solid fa-pills'
      },
      {
        title:'Servicio de Estética',
        description:'Cuidado profesional que incluye baños, cortes y arreglos de pelo para que tu mascota luzca impecable',
        icon: 'fa-solid fa-flask'
      },
      {
        title:'Veterinaria a Domicilio',
        description:'Atención médica en la comodidad de tu hogar, ideal para mascotas que no pueden desplazarse fácilmente',
        icon: 'fa-solid fa-award'
      },
      {
        title:'Planes de Salud',
        description:'Paquetes personalizados que incluyen revisiones, vacunas y tratamientos preventivos',
        icon: 'fa-solid fa-cat'
      },
      {
        title:'Guardería y Paseos',
        description:'Cuidado y entretenimiento asegurado para tus mascotas mientras trabajas o viajas',
        icon: 'fa-solid fa-award'
      },
      {
        title:'Eventos y Talleres',
        description:'Participa en nuestros eventos educativos y talleres para aprender más sobre el cuidado y entrenamiento de mascotas',
        icon: 'fa-solid fa-heart-pulse'
      },      
    ]
  }

  listFirstServices: any  = this.data.services.slice(0,4);
  listSecondServices: any  = this.data.services.slice(4,5);
  listTertServices: any  = this.data.services.slice(5,9);
}
