import { Injectable } from '@angular/core';
import { PseudoFabricItem, Item } from '../models/todo/todo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  public todoItems: Array<Item>;

  constructor() {
    this.todoItems = [
      new PseudoFabricItem('Buy Flowers', false),
      new PseudoFabricItem('Get Shoes', true),
      new PseudoFabricItem('Collect Tickets', false)
    ];
  }
  getTodoItems(): Observable<Item[]> {
    return of(this.todoItems);
  }
}
