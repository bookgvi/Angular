import { Observer } from './observer';

export interface Subject {
  attach(observer: Observer): void;

  detach(htmlTag: HTMLElement): void;

  notify(): void;
}
