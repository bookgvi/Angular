import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'contacts-item',
  templateUrl: './contacts-item.component.html',
  styleUrls: ['./contacts-item.component.css']
})
export class ContactsItemComponent {
  contactPerson = 'Todd';
  @Output() saveContactPerson = new EventEmitter<string>();

  sendContactPerson(): void {
    this.saveContactPerson.emit(this.contactPerson);
  }
}
