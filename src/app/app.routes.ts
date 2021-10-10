import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { HeroViewComponent } from './components/hero-view/hero-view.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroes/:id', component: HeroViewComponent },
  { path: 'heroes/search/:key', component: HeroSearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES, { useHash: true });
