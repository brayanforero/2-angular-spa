import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/interfaces/hero.interface';
import { HeroesService } from 'src/app/services/heroes.services';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [],
})
export class HeroComponent implements OnInit {
  hero: any;

  constructor(
    private activadedRoute: ActivatedRoute,
    private _heroesServices: HeroesService
  ) {
    this.activadedRoute.params.subscribe((params) => {
      this.hero = this._heroesServices.getHero(params['id']);
    });
  }

  ngOnInit(): void {}
}
