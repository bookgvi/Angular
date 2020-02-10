import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { queue } from 'rxjs/internal/scheduler/queue';
import { asap } from 'rxjs/internal/scheduler/asap';
import { async } from 'rxjs/internal/scheduler/async';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';

@Component({
  selector: 'app-rxjs-sheduler',
  templateUrl: './rxjs-sheduler.component.html',
  styleUrls: ['./rxjs-sheduler.component.css']
})
export class RxjsShedulerComponent implements OnInit {
  private dummyArray: string[];

  constructor() {
    this.dummyArray = ['a', 'b', 'c', 'd'];
  }

  ngOnInit() {
    from(this.dummyArray).pipe(
      startWith('Queue scheduler...', queue)
    ).subscribe({
      next(v: string) {
        console.log(v)
      }
    });
    from(this.dummyArray).pipe(
      startWith('ASAP scheduler...', asap)
    ).subscribe({
      next(v: string) {
        console.log(v)
      }
    });
    from(this.dummyArray).pipe(
      startWith('Async scheduler...', async)
    ).subscribe({
      next(v: string) {
        console.log(v)
      }
    });
    from(this.dummyArray).pipe(
      startWith('Animation frame scheduler...', animationFrame)
    ).subscribe({
      next(v: string) {
        console.log(v)
      }
    });
  }

}
