import { Component, OnInit } from '@angular/core';
import { InputSubject } from '../ObserverService/classes/inputSubject/input-subject';
import { InputObserver } from '../ObserverService/classes/inputObserver/input-observer';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css']
})
export class ObserverComponent implements OnInit {
  private input: HTMLInputElement;
  private eventHandler: boolean;
  private handler: (e: Event) => void;
  public subject: InputSubject;

  constructor() {
    this.eventHandler = true;
  }

  ngOnInit(): void {
    this.input = document.getElementById('input1') as HTMLInputElement;
    this.subject = new InputSubject();
    this.handler = this.hInput.bind(this.subject);
    this.attach();
  }

  public detach(): void {
    console.log();
    if (this.subject.observers.length) {
      this.subject.detach();
    }
    if (!this.subject.observers.length && !this.eventHandler) {
      this.input.removeEventListener('input', this.handler);
      this.eventHandler = true
      console.log('Подписчиков не осталось :(')
    }

  }

  public attach(): void {
    this.subject.attach(new InputObserver());
    this.eventHandler ? this.input.addEventListener('input', this.handler) : '';
    this.eventHandler = false;
  }

  private hInput(e: Event): void {
    // @ts-ignore
    this.state = e.target.value;
    // @ts-ignore
    this.notify();
  }

}

