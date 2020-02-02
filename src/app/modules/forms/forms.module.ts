import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { KeyFilterModule } from 'primeng/keyfilter';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';

import { FormMainComponent } from '../../components/forms/form-main/form-main.component';
import { FormKeyFilteringComponent } from '../../components/forms/form-key-filtering/form-key-filtering.component';
import { FormReactiveComponent } from '../../components/forms/form-reactive/form-reactive.component';

@NgModule({
  declarations: [
    FormMainComponent,
    FormKeyFilteringComponent,
    FormReactiveComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    KeyFilterModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    ButtonModule
  ]
})
export class FormModule {
}
