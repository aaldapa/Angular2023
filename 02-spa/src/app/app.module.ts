import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { Substring100Pipe } from './shared/pipes/substring100.pipe';
import { HeroComponent } from './components/hero/hero.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { FormsModule } from '@angular/forms';
import { HeroListComponent } from './components/hero-list/hero-list.component';

import { registerLocaleData } from "@angular/common";
import localEs from "@angular/common/locales/es";
import { CapitalizePipe } from './shared/pipes/capitalize.pipe';
import { VideoComponent } from './components/video/video.component';
import { DomseguroPipe } from './shared/pipes/domseguro.pipe';
import { AsteriscosPipe } from './shared/pipes/asteriscos.pipe';

registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HeroesComponent,
    AboutComponent,
    Substring100Pipe,
    HeroComponent,
    HeroCardComponent,
    BuscadorComponent,
    HeroListComponent,
    CapitalizePipe,
    VideoComponent,
    DomseguroPipe,
    AsteriscosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{
    provide:LOCALE_ID,
    useValue: 'es'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
