import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// SERVICES
import { HeroesService } from './services/heroes.services';

// COMPONENTS
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroViewComponent } from './components/hero-view/hero-view.component';

// ROUTES
import { APP_ROUTING } from './app.routes';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroViewComponent,
    HeroSearchComponent,
    HeroCardComponent,
  ],
  imports: [BrowserModule, APP_ROUTING],
  providers: [HeroesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
