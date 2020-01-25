import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { InterpolationComponent } from './interpolation/interpolation.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [InterpolationComponent],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [InterpolationComponent]
})
export class AppModule {
}
