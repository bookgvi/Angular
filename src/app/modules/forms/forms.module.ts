import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DataSourceService } from '../../services/dataSource/data-source.service';
import { FormControlService } from '../../services/formControl/form-control.service';

import { PageOneComponent } from '../../components/page-one/page-one.component';
import { DynamicFormComponent } from '../../components/page-one/dynamic-form/dynamic-form.component';
import { DynamicFieldComponent } from '../../components/page-one/dynamic-field/dynamic-field.component';

@NgModule({
  declarations: [
    PageOneComponent,
    DynamicFormComponent,
    DynamicFieldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    PageOneComponent
  ],
  providers: [
    DataSourceService,
    FormControlService
  ]
})
export class FormsModule {
}
