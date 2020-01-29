import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {
  public variable: number = 0;
  private observableInstance: Observable<number>;
  private subscribtion: Subscription;
  private subscriber: Subscriber<number>;

  constructor() {
  }

  public changeVariable(self): number {
    this.variable = Math.ceil(Math.random() * 256);
    this.subscriber.next(this.variable);
    return this.variable;
  }

  private observable(): Observable<number> {
    return new Observable((observer: Subscriber<number>) => {
      this.subscriber = observer;
    });
  }

  ngOnInit() {
    this.observableInstance = this.observable();
    this.subscribtion = this.observableInstance.subscribe((val: number) => {
      console.log('QQQ', val);
    });
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

}
