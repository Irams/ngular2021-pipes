import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

  nombreLower: string = 'herbert'; 
  nombreUpper: string = 'HERBERTH'; 
  nombreCompleto: string = 'heRBerTh mEdiNa'; 

  fecha: Date = new Date(); //El día de hoy


  }
