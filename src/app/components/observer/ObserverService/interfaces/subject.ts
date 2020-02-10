import { Observer } from './observer';

export interface Subject {
  attach(observer: Observer): void;

  detach(): void;

  notify(): void;
}
