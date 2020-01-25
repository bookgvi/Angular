import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-root',
  template: `
    <h2>
      My favorite hero is {{ favHero() }}
    </h2>
    <ul>
      <li *ngFor="let hero of heroes">{{ hero.name }}</li>
    </ul>
  `,
  styleUrls: ['./hero.component.css']
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
