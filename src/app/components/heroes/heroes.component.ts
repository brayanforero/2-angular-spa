import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.services';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [],
})
export class HeroesComponent implements OnInit {
  heroes: any[] = [];
  constructor(private _heroesServices: HeroesService) {}

  ngOnInit(): void {
    this.heroes = this._heroesServices.getHeroes();
  }
}
