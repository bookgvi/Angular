import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { ContactsItemComponent } from './contacts-item/contacts-item.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeroComponent } from './hero/hero.component';


@NgModule({
  declarations: [
    InterpolationComponent,
    ContactsItemComponent,
    ContactsComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [ContactsComponent]
})
export class AppModule {
}
