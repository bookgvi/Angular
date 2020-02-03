import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';

import { TablesModule } from './modules/tables/tables.module';
import { ChartsModule } from './modules/charts/charts.module';
import { FormModule } from './modules/forms/forms.module';

import { AppRoutingModule } from './router/app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TablesModule,
    TabMenuModule,
    ChartsModule,
    FormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
