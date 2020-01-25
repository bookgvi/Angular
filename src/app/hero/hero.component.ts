import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'hero',
  template: `
    <h2 class="m-0">
      My favorite hero is {{ favHero() }}
    </h2>
    <div class="col">
      <ul style="margin: 0;">
        <li *ngFor="let hero of heroes" (click)="favHeroID = hero.id" class="clickable mt-1">{{ hero.name }}</li>
      </ul>
    </div>
  `,
  styleUrls: ['./hero.component.css', '../../style/flex.classes.css']
})
export class HeroComponent implements OnInit {
  public heroes: Array<Hero>;
  private favHeroID: number = 5;

  constructor() {
    this.heroes = [
      new Hero(1, 'Magnetto'),
      new Hero(10, 'Storm'),
      new Hero(2, 'SpiderMan'),
      new Hero(5, 'IronMan')
    ];
  }

  ngOnInit() {
  }

  favHero(): string {
    return this.heroes.filter(hero => hero.id === this.favHeroID)[0].name;
  }

}
