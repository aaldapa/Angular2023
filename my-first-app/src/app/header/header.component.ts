import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private headerService: HeaderService,
    private router: Router) { }

  search(searchValue: string): void {
    
    //Comprobacion de la ruta activa
    if (this.router.url !== '/dashboard'){
      //Si la pagina no es la de dasboard
      alert('El filtrado de héroes solo funciona en la pagina Inicial');
    }
      console.log(this.router.url);
    
    console.log(`SOLICITUD DE BÚSQUEDA --> seachValue: ${searchValue}`);
    this.headerService.search(searchValue);
  }

}