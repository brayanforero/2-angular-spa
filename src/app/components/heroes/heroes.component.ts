import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.services';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [],
})
export class HeroesComponent implements OnInit {
  heroes: any[] = [];
  constructor(private _heroesServices: HeroesService, private router: Router) {}

  ngOnInit(): void {
    this.heroes = this._heroesServices.getHeroes();
  }

  showHero(i: number): void {
    console.log(i);
    this.router.navigate(['heroes', i]);
  }
}
