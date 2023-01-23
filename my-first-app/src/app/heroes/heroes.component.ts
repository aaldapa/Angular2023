import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../header.service';
import { HeroServiceService } from '../hero-service.service';
import { Hero } from './../model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes!: Hero[];

  constructor(private heroService: HeroServiceService) { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getHeroes();
  }

  getHeroes() {
    // this.heroService.getHeroes().subscribe( heroes =>
    //   this.heroes = heroes
    // );

    this.heroService.getAllHeroes().subscribe(heroes =>
      this.heroes = heroes
    );
  }

  deleteHero(id: number) {
    //borrar Heroe
    this.heroService.deleteHero(id);
    //Recargar lista de Heroes
    this.getHeroes();
  }
}
