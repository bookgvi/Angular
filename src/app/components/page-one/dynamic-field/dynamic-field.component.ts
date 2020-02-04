import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BaseData } from '../../../models/page-one/baseData/base-data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.css']
})
export class DynamicFieldComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public isValid: boolean;

  constructor() {
    this.isValid = true;
  }

  @Input() form: FormGroup;
  @Input() field: BaseData<any>;

  ngOnInit() {
    this.subscription = this.checkFormFields(this.form);
  }

  private checkFormFields(form): Subscription {
    return form.statusChanges.subscribe((val) => {
      this.isValid = val === 'VALID';
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
