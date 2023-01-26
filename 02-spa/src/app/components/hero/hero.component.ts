import { HeroService } from './../../servicios/hero.service';
import { Hero } from './../../model/hero';
import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  id!: string;
  hero!: Hero;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroService: HeroService,
              @Inject(LOCALE_ID) public locale: string) {

      

    //2 formas de obtener los parametros de la ruta
    //this.activatedRoute.params.subscribe(params => this.id = params['id']);
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log("VER HEROE: " + this.id);
  }

  ngOnInit(): void {
    this.getHero(this.id);
  }

  /**
   * Obtiene los datos del Heroe
   * @param nombre 
   */
  getHero(nombre: string): void {

    this._heroService.getHeroById(nombre)
      .subscribe((hero: Hero) => this.hero = hero);

  }


}
