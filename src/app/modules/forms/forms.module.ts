import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators, FormsModule } from '@angular/forms';

import { KeyFilterModule } from 'primeng/keyfilter';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

import { FormMainComponent } from '../../components/forms/form-main/form-main.component';
import { FormKeyFilteringComponent } from '../../components/forms/form-key-filtering/form-key-filtering.component';

@NgModule({
  declarations: [
    FormMainComponent,
    FormKeyFilteringComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    KeyFilterModule,
    InputTextModule,
    MessagesModule,
    MessageModule
  ]
})
export class FormModule {
}
