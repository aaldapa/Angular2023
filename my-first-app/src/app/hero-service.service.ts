import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './model/hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroServiceService {
  public idKey: string = 'hero-id_';

  constructor() {}

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  /**
   * Devuelve todos los heroes del localstorage
   * @returns
   */
  getAllHeroes(): Observable<Hero[]> {
    let heroes: Hero[] = this.getAllHeroKeys().map((key: string) =>
      JSON.parse(localStorage.getItem(key)!)
    );

    heroes.sort((heroA, heroB) => {
      return heroA.id - heroB.id;
    });

    return of(heroes);
  }

  /**
   * Devuelve hero
   * @param id
   * @returns
   */
  getHeroById(id: number): Observable<Hero> {
    let key: string = this.idKey.concat(id.toString());

    let hero: Hero = JSON.parse(localStorage.getItem(key)!);

    return of(hero);
  }

  /**
   * Guarda el hero en  localstorage
   * @param hero
   * @returns
   */
  saveHero(hero: Hero): number {
    //Si no tiene id obtenemos el max
    if (!hero.id) {
      hero.id = this.getNextIdVal();
    }

    let key: string = this.idKey.concat(hero.id.toString());
    localStorage.setItem(key, JSON.stringify(hero));

    return hero.id;
  }

  deleteHero(id: number) {
    let key: string = this.idKey.concat(id.toString());
    localStorage.removeItem(key);
  }

  /**
   * Actua como secuenciador devolviendo el id max+1
   * @returns
   */
  getNextIdVal(): number {
    //Obtener todos las claves del localStorage y filtrar las que contienen la palabra hero-id_
    let keys: string[] = Object.keys(localStorage).filter((key) =>
      key.includes(this.idKey)
    );

    // console.log(keys);

    //Me quedo con la numeracion de los ids
    let ids: number[] = keys.map(
      (key: string) => +key.substring(this.idKey.length)
    );

    // console.log(ids);

    //Obtengo el valor mas alto
    let idMax: number = ids.length > 0 ? Math.max(...ids) : 0;

    console.log(idMax);

    //Devuelvo max + 1
    return idMax + 1;
  }

  /**
   * Obtiene todas las claves de los heroes del localStorage
   * @returns
   */
  getAllHeroKeys(): string[] {
    //Obtener todos las claves del localStorage y filtrar las que contienen la palabra hero-id_
    let keys: string[] = Object.keys(localStorage).filter((key) =>
      key.includes(this.idKey)
    );

    return keys;
  }
}
