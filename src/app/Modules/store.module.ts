import { NgModule } from '@angular/core';
import { ModelModule } from './model.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreComponent } from '../storeShop/store.component';
import { CartComponent } from '../cart/cart.component';
import { AboutComponent } from '../about/about.component';


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
