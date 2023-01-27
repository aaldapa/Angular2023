import { HEROES } from '../components/heroes/heroes-mock';
import { Hero } from '../model/hero';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  getAllHeroesFromMock(): Observable<Hero[]> {
    let heroes: Hero[] = HEROES;
    return of(heroes);
  }

  /**
   * Devuelve la lista de heroes del mock
   * @param term
   * @returns
   */
  getHeroesByNameFromMock(term: string) {
    let heroes: Hero[] = HEROES.filter((hero: Hero) => {
      if (undefined !== term && term.length > 0) {
        return hero.nombre.toUpperCase().includes(term.toUpperCase());
      } else {
        return false;
      }
    });

    return of(heroes);
  }

  getHeroById(nombre: string): Observable<Hero> {
    let hero: Hero = HEROES.find((hero: Hero) => hero.nombre == nombre)!;
    return of(hero);
  }
}
