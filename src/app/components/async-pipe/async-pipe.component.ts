import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import DateTimeFormat = Intl.DateTimeFormat;

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {
  public time: Observable<string> = new Observable((observer: Subscriber<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  constructor() {
  }

  ngOnInit() {
  }

}
