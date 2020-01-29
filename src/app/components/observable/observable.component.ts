import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {
  public variable: number = 0;

  constructor() {
  }

  public changeVariable(): number {
    this.variable = Math.ceil(Math.random() * 256);
    return this.variable;
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

}
