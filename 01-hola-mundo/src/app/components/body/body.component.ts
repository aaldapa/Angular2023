import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  titulo: string;
  frase:string;
  lstItems: string[];
  mostrarOcultar:boolean;
  
  constructor() { 
    this.titulo= "Card";
    this.frase="Esta es una muestra de una card estilada como primary"
    this.lstItems = ["Uno","Dos", "Tres", "Cuatro"];
    this.mostrarOcultar = true;
  }

  ngOnInit(): void {
  }

}
