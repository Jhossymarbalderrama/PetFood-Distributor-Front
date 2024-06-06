import { Component } from '@angular/core';

@Component({
  selector: 'app-inspiring',
  templateUrl: './inspiring.component.html',
  styleUrls: ['./inspiring.component.css']
})
export class InspiringComponent {

  data: any = {
    title:'Pasión por el Bienestar de tus Mascota',
    description: [
      `En Pet Food Premium, nuestra pasión es garantizar la salud y felicidad de tus mascotas. 
      Como distribuidora líder de alimentos y accesorios para mascotas, nos comprometemos a ofrecer 
      productos de la más alta calidad que promuevan el bienestar integral de tus compañeros animales.`,
      `Nos especializamos en proporcionar alimentos premium que satisfacen las necesidades nutricionales 
      específicas de mascotas de todas las edades, razas y tamaños. Entendemos que cada mascota es única, 
      por eso ofrecemos una amplia variedad de productos que se adaptan a sus preferencias y requerimientos dietéticos.`,
      `Estamos aquí para acompañarte en cada paso del camino, proporcionando todo lo necesario para que 
      tus mascotas vivan una vida plena y saludable. Confía en nosotros, porque en Pet Food Premium, tu mascota es nuestra prioridad.`
    ]
  }
}
