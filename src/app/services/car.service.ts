import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car-model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class CarService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = '../../assets/data/carsmall.json';
  }

  getCarsSmall(): Observable<object> {
    return this.http.get(this.url).pipe(
      // @ts-ignore
      map(car => car.data)
    );
  }
}
