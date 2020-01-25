import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { ContactsItemComponent } from './contacts/contacts-item/contacts-item.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeroComponent } from './hero/hero.component';
import { LifeHooksComponent } from './life-hooks/life-hooks.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    InterpolationComponent,
    ContactsItemComponent,
    ContactsComponent,
    HeroComponent,
    LifeHooksComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
