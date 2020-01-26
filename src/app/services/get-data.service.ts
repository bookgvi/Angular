import { Injectable } from '@angular/core';
import { PseudoFabricItem, Item } from '../models/todo/todo';

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
  getTodoItems(): Array<Item> {
    return this.todoItems;
  }
  addNewTodoItem(action: string): Item {
    return new PseudoFabricItem(action, false);
  }
}
