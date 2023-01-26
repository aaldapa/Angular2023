import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/servicios/hero.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  filterValue: string = '';
  heroes: Hero[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private _heroService: HeroService) { }

  ngOnInit(): void {

    /**
     * Cuando se entra en la pagina del buscador (invocada al buscar), se capturan
     * el parametro de busqueda de la url.
     */
    this.activatedRoute.queryParams
      .subscribe(params => {
        this.filterValue = params.nombre;
        this.getHeroesByName(this.filterValue);
      });

  }

  getHeroesByName(filter: string) {
    console.log(`BUSQUEDA DE HEROES con filtro: --> '${filter}'`);

    this.filterValue = filter;

    this._heroService.getHeroesByNameFromMock(filter)
      .subscribe((heroes: Hero[]) => this.heroes = heroes);
  }

}
