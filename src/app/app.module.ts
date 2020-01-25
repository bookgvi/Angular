import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { InterpolationComponent } from './interpolation/interpolation.component';
import { ContactsItemComponent } from './contacts-item/contacts-item.component';
import { ContactsComponent } from './contacts/contacts.component';


@NgModule({
  declarations: [InterpolationComponent, ContactsItemComponent, ContactsComponent],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [ContactsComponent]
})
export class AppModule {
}
