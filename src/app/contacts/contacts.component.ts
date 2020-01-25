import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['../../style/flex.classes.css']
})
export class ContactsComponent implements OnInit {
  name: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  saveContact(e): void {
    this.name = e;
  }
}
