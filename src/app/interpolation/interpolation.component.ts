import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  name = 'Angular';

  constructor() {
  }

  ngOnInit() {
  }

  showTitle(): string {
    return `This is title from class method!!! name = ${ this.name }`;
  }
  hClick(arg: string): void {
    this.name = arg;
  }
}
