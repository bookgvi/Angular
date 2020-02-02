import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormMainComponent } from '../../components/forms/form-main/form-main.component';
import { FormKeyFilteringComponent } from '../../components/forms/form-key-filtering/form-key-filtering.component';

@NgModule({
  declarations: [
    FormMainComponent,
    FormKeyFilteringComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FormsModule {
}
