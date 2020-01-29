import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit, OnDestroy {
  public variable: number = 0;
  private subject: Subject<number>;

  constructor() {
    this.subject = this.spyForVariable();
  }

  public changeVariable(): void {
    this.variable = Math.ceil(Math.random() * 256);
    this.subject.next(this.variable);
  }

  private spyForVariable(): Subject<number> {
    // return from([this.variable]);
    return new Subject<number>();
  }
  ngOnInit() {
    this.subject.subscribe((val: number) => {
      console.log(val);
    });
  }

  ngOnDestroy(): void {
    this.subject.unsubscribe();
  }

}
