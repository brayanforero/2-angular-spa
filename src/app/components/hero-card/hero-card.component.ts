import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [],
})
export class HeroCardComponent implements OnInit {
  @Input() hero: any = {};
  @Input() index?: number;
  // @Output() showing: EventEmitter<number>;
  constructor(private router: Router) {
    // this.showing = new EventEmitter();
  }

  ngOnInit(): void {}

  show() {
    this.router.navigate(['heroes', this.index]);
  }
}
