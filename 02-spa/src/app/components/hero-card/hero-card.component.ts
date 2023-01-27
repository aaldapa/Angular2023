import { Router } from '@angular/router';
import { Hero } from './../../model/hero';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css'],
})
export class HeroCardComponent {
  @Input()
  hero!: Hero;

  @Output()
  heroSeleccionado: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) {}

  verHeroe(): void {
    this.heroSeleccionado.emit(this.hero.nombre);
    this.router.navigate(['/hero', this.hero.nombre]);
  }
}
