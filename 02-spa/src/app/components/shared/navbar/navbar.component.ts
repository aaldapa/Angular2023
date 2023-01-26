import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HeroService } from './../../../servicios/hero.service';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //referencia al elemento de busqueda en el dom
  searchFieldValue: string = ''

  constructor(private _heroService: HeroService,
    private router: Router) { }

  ngOnInit(): void {
    
    /**
     * Accedo a los evento de navegacion y quedandome solamente (filter) con los que son del tipo NavegationEnd 
     * para suscribirme a ellos y eliminar la caja de texto de la busqueda cada vez que se pagine fuera 
     * de la pagina buscador
     */
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        //Obtengo la url del evento de paginacion
        if (event instanceof NavigationEnd) {
          console.log("Navegación a la url: " + event.url);
          let urlActualAComparar = event.url.substring(0, 9).toUpperCase();
          let urlBuscador = "/buscador".toUpperCase();

          //Si la url es diferente a la del buscador y el campo de busqueda no esta vacio, lo reseteo
          if (!urlActualAComparar.includes(urlBuscador)
          && this.searchFieldValue!=='') {
            console.log('Resetear input');
            this.searchFieldValue = '';
          }

        }
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
