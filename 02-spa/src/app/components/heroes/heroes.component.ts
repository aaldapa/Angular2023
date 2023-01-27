import { Hero } from './../../model/hero';
import { HeroService } from '../../services/hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes!: Hero[];

  constructor(private _heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this._heroService.getAllHeroesFromMock()
      .subscribe(heroes => this.heroes = heroes);
  }

}
