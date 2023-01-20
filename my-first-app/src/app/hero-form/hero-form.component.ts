import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroServiceService } from '../hero-service.service';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
})
export class HeroFormComponent implements OnInit {
  hero: Hero = { id: null!, name: '', age: null!, power: '' };

  showHeroJson: boolean = false;

  constructor(
    private heroService: HeroServiceService,
    private route: Router,
    private activateRoute: ActivatedRoute,
    private location: Location
  ) { }


  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    const id = Number(this.activateRoute.snapshot.paramMap.get('id'));

    if (id) {
      this.heroService
        .getHeroById(id)
        .subscribe((hero: Hero) => (this.hero = hero));
    }
  }

  /**
   * Envio del formulario
   * @param heroForm formulario
   */
  save(heroForm: NgForm) {
    //Si el formulario es valido
    if (heroForm.valid){
      this.heroService.saveHero(this.hero);
      this.route.navigate(['/heroes']);
      
    } else {
      alert('El formulario no supera las validaciones.')
    }

  }

  back() {
    this.location.back();
  }
}
