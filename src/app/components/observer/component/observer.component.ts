import { Component, OnInit } from '@angular/core';
import { InputSubject } from '../model/classes/inputSubject/input-subject';
import { InputObserver } from '../model/classes/inputObserver/input-observer';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css']
})
export class ObserverComponent implements OnInit {
  private input: HTMLInputElement;
  constructor() { }

  ngOnInit(): void {
    this.input = document.getElementById('input1') as HTMLInputElement;
    this.inputObserver();
  }

  inputObserver(): void {
    const subject: InputSubject = new InputSubject();
    const observer1: InputObserver = new InputObserver();
    const observer2: InputObserver = new InputObserver();
    const observer3: InputObserver = new InputObserver();
    subject.hInput(this.input);
    subject.attach(observer1);
    subject.attach(observer2);
    subject.attach(observer3);
  }
}
