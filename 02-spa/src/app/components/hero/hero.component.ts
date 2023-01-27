import { HeroService } from '../../services/hero.service';
import { Hero } from './../../model/hero';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


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
              private location: Location) {

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
      .subscribe((hero: Hero) => {
        this.hero = hero;
      });

  }

  back():void{
    this.location.back();
  }

}
