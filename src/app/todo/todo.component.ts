import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { Item } from '../models/todo/todo';
import { RepositoryService } from '../services/repository.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public newItem: string = '';
  public items: Array<Item> = [];

  constructor(public arrItems: RepositoryService) {
    this.items = arrItems.getArrItems();
  }

  public addItem(action: string): void {
    action.length ? this.arrItems.addNewTodoItem(action) : null;
  }

  ngOnInit() {
  }

}
