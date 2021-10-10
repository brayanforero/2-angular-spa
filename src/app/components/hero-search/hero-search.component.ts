import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/interfaces/hero.interface';
import { HeroesService } from 'src/app/services/heroes.services';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
})
export class HeroSearchComponent implements OnInit {
  heroes: Hero[] = [];
  term: string = '';
  constructor(
    private _heroesService: HeroesService,
    private activadedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activadedRoute.params.subscribe((params) => {
      this.term = params['key'];
      this.heroes = this._heroesService.searchHero(params['key']);
    });
  }
}
