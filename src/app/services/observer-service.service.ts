import { Injectable } from '@angular/core';
import { Observable, Subject, Subscriber, Subscription } from 'rxjs';

@Injectable()
export class ObserverService {
  private obs: Subscriber<any>;

  constructor() {
  }

  private observable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      this.obs = observer;
      return {
        unsubscribe() {
          console.log('Finished...');
        }
      };
    });
  }

  public subject(): object {
    const subscription: Subscription = this.observable().subscribe({
      next(val: any) {
      console.log(val);
    }
    });
    return { obs: this.obs, subscription };
  }
}
