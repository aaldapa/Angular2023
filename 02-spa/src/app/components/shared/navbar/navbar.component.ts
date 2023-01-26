import { Router } from '@angular/router';
import { HeroService } from './../../../servicios/hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchFieldValue:string = ''

  constructor(private _heroService: HeroService,
    private router: Router) { }

  ngOnInit(): void {
    this._heroService.reseteoEmitter.subscribe(() => {console.log("Reseteo")
    this.searchFieldValue ='';
  });
  }

  /**
   * Al realizarse la busqueda en el componente dispara la emision del evento
   * @param filter
   */
  searchHero(filter: string) {
    console.log(`SOLICITUD DE BÚSQUEDA --> inputSearch: '${filter}'`);

    //redirigimos a la pagina de buscador de heroes (los parametros para dejar mas bonita la url)
    // this.router.navigate(['/buscador'], { queryParams: { nombre: filter } });
    // this._heroService.searchHeroesEventEmitter(filter);

    this.router.navigate(['/buscador'], { queryParams: { nombre: filter } });


  }

}
