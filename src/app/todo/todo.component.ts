import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { Item } from '../models/todo/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  newItem: string = '';
  constructor(public items: GetDataService) { }

  addItem(action: string): Item {
    return this.items.addNewTodoItem(action);
  }

  ngOnInit() {
  }

}
