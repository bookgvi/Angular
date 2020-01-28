import { Injectable } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Injectable()
export class RestDatasourceService {
  private baseURL: string = 'https://pre.ugoloc.ucann.ru/api/auth/login';

  constructor() {
    const mouseMove: Observable<Event> = fromEvent(document.body, 'mousemove');
    const subscription: Subscription = mouseMove.subscribe((e: MouseEvent) => {
      console.log(`${e.clientX}:${e.clientY}`);
      if (e.clientX < 40 && e.clientY < 40) {
        subscription.unsubscribe();
      }
    });
  }
}
