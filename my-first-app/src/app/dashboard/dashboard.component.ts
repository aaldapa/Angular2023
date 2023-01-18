import { Hero } from './../model/hero';
import { Component, OnInit } from '@angular/core';
import { HeroServiceService } from '../hero-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes!: Hero[];
  constructor(private heroService: HeroServiceService) { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getAllHeroes()
      .subscribe((heroes: Hero[]) => this.heroes = heroes);

    // this.heroes = [
    //   { id: 1, name: 'Batman', age: 24, power: 'riqueza' },
    //   { id: 2, name: 'Wonderboy', age: 14, power: 'salto' },
    // ];
  }
}
