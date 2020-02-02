import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';

import { TablesModule } from './modules/tables/tables.module';
import { ChartsModule } from './modules/charts/charts.module';

import { AppRoutingModule } from './router/app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TablesModule,
    TabMenuModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
