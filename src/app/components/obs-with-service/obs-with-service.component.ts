import { Component, OnDestroy, OnInit } from '@angular/core';
import { ObserverService } from '../../services/observer-service.service';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-obs-with-service',
  templateUrl: './obs-with-service.component.html',
  styleUrls: ['./obs-with-service.component.css'],
  providers: [ObserverService]
})
export class ObsWithServiceComponent implements OnInit, OnDestroy {
  public variable: number = 0;
  public observerFunc: Subscriber<any>;
  private subscription: Subscription;

  constructor(private observer: ObserverService) {
  }

  public changeVariable(): number {
    this.variable = Math.ceil(Math.random() * 256);
    this.observerFunc.next(this.variable);
    return this.variable;
  }

  ngOnInit() {
    // @ts-ignore
    const { obs, subscription } = this.observer.subject();
    this.observerFunc = obs;
    this.subscription = subscription;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
