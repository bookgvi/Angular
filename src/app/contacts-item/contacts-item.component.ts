import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'contacts-item',
  templateUrl: './contacts-item.component.html',
  styleUrls: ['./contacts-item.component.css']
})
export class ContactsItemComponent implements OnInit {
  contactPerson = 'Todd';
  @Input() saveContactPerson: string = 'Unknown';
  @Output() saveContactPersonChange = new EventEmitter<string>();

  saveContact(): void {
    this.saveContactPersonChange.emit(this.contactPerson);
  }

  ngOnInit(): void {
  }
}
