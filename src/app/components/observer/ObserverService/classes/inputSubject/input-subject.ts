import { Subject } from '../../interfaces/subject';
import { Observer } from '../../interfaces/observer';

export class InputSubject implements Subject {
  public observers: Observer[];
  public state: any;
  private listenersCount: number;

  constructor() {
    this.observers = [];
    this.listenersCount = 0;
  }

  attach(observer: Observer): void {
    this.observers.push(observer);
    this.listenersCount++;
  }

  detach(inputTag: HTMLInputElement): void {
    if (this.observers.length) {
      this.observers.splice(0, 1);
      console.log('Минус подписчик...');
    }
    if (!this.observers.length && this.listenersCount) {
      inputTag.removeEventListener('input', this.hInput);
      this.listenersCount = 0;
      console.log('Подписчиков не осталось :(')
    }
  }

  notify(): void {
    this.observers.forEach((observer: Observer) => {
      observer.update(this);
    });
  }

  inputEventListener(inputTag): void {
    inputTag.addEventListener('input', this.hInput.bind(this));
  }

  private hInput(e: Event): void {
    this.state = e;
    this.notify();
  }
}
