import { Component, OnInit } from '@angular/core';
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
  constructor(private heroService: HeroServiceService, private headerService: HeaderService) {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getHeroes();
    this.headerService.searchEvent.subscribe( (searchValue: string) => alert('El buscador no funciona en esta pantalla'));
  }

  getHeroes() {
    // this.heroService.getHeroes().subscribe( heroes =>
    //   this.heroes = heroes
    // );

    this.heroService.getAllHeroes().subscribe( heroes =>
      this.heroes = heroes
    );
  }

  deleteHero(id:number){
    this.heroService.deleteHero(id);

    this.getHeroes();
  }
}
