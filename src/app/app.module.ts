import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './components/observable/observable.component';
import { SubjectComponent } from './components/subject/subject.component';
import { ObsWithServiceComponent } from './components/obs-with-service/obs-with-service.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    SubjectComponent,
    ObsWithServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
