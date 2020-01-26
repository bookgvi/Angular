import { Injectable } from '@angular/core';
import { FabricItem, Item } from '../models/todo/todo';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  public todoItems: Array<Item>;

  constructor() {
    this.todoItems = [
      new FabricItem('Buy Flowers', false),
      new FabricItem('Get Shoes', true),
      new FabricItem('Collect Tickets', false)
    ];
  }
  getTodoItems(): Array<Item> {
    return this.todoItems;
  }
}
