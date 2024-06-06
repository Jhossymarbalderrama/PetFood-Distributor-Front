import { Component } from '@angular/core';

@Component({
  selector: 'app-animal-link-value',
  templateUrl: './animal-link-value.component.html',
  styleUrls: ['./animal-link-value.component.css']
})
export class AnimalLinkValueComponent {
  
  data: any = {
    p1: 'Pasión infinita',
    p2: 'Compromiso con calidad excepcional',
    p3: 'Integridad, ética, transparencia',
    p4: 'Cuidado amoroso, productos confiables, resultados duraderos'
  }
}
