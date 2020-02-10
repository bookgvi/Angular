import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { RxjsShedulerComponent } from './components/rxjs-sheduler/rxjs-sheduler.component';
import { ObserverComponent } from './components/observer/component/observer.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsShedulerComponent,
    ObserverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
