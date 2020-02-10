import { Subject } from '../../interfaces/subject';
import { Observer } from '../../interfaces/observer';

export class InputSubject implements Subject {
  private observers: Observer[];
  public state: any;

  constructor() {
    this.observers = [];
  }

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    const index: number = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(): void {
    this.observers.forEach((observer: Observer) => {
      observer.update(this);
    });
  }

  hInput(inputTag): void {
    inputTag.addEventListener('input', (e: InputEvent) => {
      this.state = e;
      this.notify();
    });
  }
}
