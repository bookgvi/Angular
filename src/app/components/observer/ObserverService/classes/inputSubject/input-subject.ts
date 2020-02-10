import { Subject } from '../../interfaces/subject';
import { Observer } from '../../interfaces/observer';

export class InputSubject implements Subject {
  public observers: Observer[];
  public state: any;

  constructor() {
    this.observers = [];
  }

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(): void {
    this.observers.splice(0, 1);
    console.log('Минус подписчик...');
  }

  notify(): void {
    this.observers.forEach((observer: Observer) => {
      observer.update(this);
    });
  }

}
