import { Injectable } from '@angular/core';
import { GetDataService } from './get-data.service';
import { Item, PseudoFabricItem } from '../models/todo/todo';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  private arrItems: Item[] = [];

  constructor(private dataService: GetDataService) {
  }

  public getArrItems(): Item[] {
    this.dataService.getTodoItems().subscribe(data => {
      this.arrItems = data;
    });
    return this.arrItems;
  }

  public addNewTodoItem(action: string): void {
    this.dataService.todoItems.push(new PseudoFabricItem(action, false));
  }
}
