import { NgModule } from '@angular/core';
import { ModelModule } from './model.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreComponent } from '../StoreShop/store.component';

@NgModule({
  declarations: [StoreComponent],
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule
  ],
  exports: [StoreComponent]
})
export class StoreModule { }
