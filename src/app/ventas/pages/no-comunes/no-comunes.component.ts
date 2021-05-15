import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{

  constructor() { }

  //i18nSelect
  nombre: string ='Herberth';
  genero: string ='masculino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['María', 'Pedro', 'Orlando', 'Florida', 'Santiago'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre = 'Maga';
    this.genero = 'femenino';
    
  }

  borrarCliente(){
    this.clientes.pop();
    
  }

  //KeyValuePipe

  persona = {
    nombre: 'Herberth',
    edad: 43,
    direccion: 'Tenango del Valle, Estado de México'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Acuaman',
      vuela: false
    }
  ]


  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) =>{
    setTimeout(() =>{
      resolve('Tenemos data de promesa')
    }, 3500 )
  });


}
