import { Hero } from 'src/app/model/hero';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit {
  @Input()
  heroes: Hero[] = [];

  @Input()
  filter: string = '';

  constructor() {}

  ngOnInit(): void {}

  printEventoHijo(nombre: string): void {
    console.log(`Se ha seleccionado la card del heroe: ${nombre}`);
  }
}
