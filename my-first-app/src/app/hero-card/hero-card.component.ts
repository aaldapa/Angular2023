import { Component, Input } from '@angular/core';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent {
  @Input()
  hero!:Hero;
}
