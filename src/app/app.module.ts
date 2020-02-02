import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TablesModule } from './modules/tables/tables.module';

import { AppRoutingModule } from './router/app-routing.module';

import { AppComponent } from './app.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TablesModule,
    TabMenuModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
