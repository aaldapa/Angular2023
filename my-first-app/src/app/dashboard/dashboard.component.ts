import { Hero } from './../model/hero';
import { Component, Input, OnInit } from '@angular/core';
import { HeroServiceService } from '../hero-service.service';
import { HeaderComponent } from '../header/header.component';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  heroes!: Hero[];
  constructor(private heroService: HeroServiceService, private header: HeaderService) {

  }

  ngOnInit(): void {
    //Obtener heroes para cargar la pantalla al entrar
    this.getHeroes();

    //Subscribirse al evento de busqueda de Heroes
    this.header.searchEvent.subscribe((searchParam: string) => {
      console.log(`RECEPCION EVENTO ${searchParam}`);

      if (searchParam) {
        this.getHeroesByName(searchParam);
      } else {
        this.getHeroes();
      }
    });


  }

  getHeroes() {
    this.heroService.getAllHeroes()
      .subscribe((heroes: Hero[]) => this.heroes = heroes);
  }

  getHeroesByName(name: string) {
    console.log("Lanzamiento de busqueda");
    this.heroService.findHeroesByName(name)
    .subscribe((heroes: Hero[]) => this.heroes = heroes);
  }
}
