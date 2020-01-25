import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ContactsItemComponent } from './contacts-item/contacts-item.component';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['../../style/flex.classes.css']
})
export class ContactsComponent implements OnInit, AfterViewInit {
  name: string;
  @ViewChild(ContactsItemComponent, { static: false })
  private refToChildComponent: ContactsItemComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.refToChildComponent);

    setTimeout(() => {
      this.name = `Dirty ${this.refToChildComponent.contactPerson}`;
    }, 0);
  }
}
