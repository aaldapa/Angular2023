import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroServiceService } from '../hero-service.service';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
})
export class HeroFormComponent implements OnInit {
  hero: Hero = { id: null!, name: '', age: null!, power: '' };

  constructor(
    private heroService: HeroServiceService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    if (id) {
      this.heroService
      .getHeroById(id)
      .subscribe((hero: Hero) => (this.hero = hero));
    }
  }

  saveHero() {
    this.heroService.saveHero(this.hero);
    this.location.back();
  }

  back(){
    this.location.back();
  }
}
