import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ModelModule } from './model.module';

import { StoreComponent } from '../Components/storeShop/store.component';
import { CartComponent } from '../Components/cart/cart.component';
import { AboutComponent } from '../Components/about/about.component';


@NgModule({
  declarations: [
    StoreComponent,
    CartComponent,
    AboutComponent
  ],
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    StoreComponent,
    CartComponent,
    AboutComponent
  ]
})
export class StoreModule { }
