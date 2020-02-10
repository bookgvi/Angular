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
  public subject: InputSubject;
  constructor() { }

  ngOnInit(): void {
    this.input = document.getElementById('input1') as HTMLInputElement;
    this.inputObserver();
  }

  inputObserver(): void {
    this.subject = new InputSubject();
    const observer1: InputObserver = new InputObserver();
    const observer2: InputObserver = new InputObserver();
    const observer3: InputObserver = new InputObserver();
    this.subject.inputEventListener(this.input);
    this.subject.attach(observer1);
    this.subject.attach(observer2);
    this.subject.attach(observer3);
  }

  public detach(): void {
    this.subject.detach(this.input);
  }

  public attach(): void {
    this.subject.attach(new InputObserver());
  }
}
