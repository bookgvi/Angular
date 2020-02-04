import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class FormControlService {

  constructor(private fb: FormBuilder) {
  }

  public generateForm(data): FormGroup {
    let group: any = {};
    data.forEach(item => {
      const isRequired = item.isRequired ? Validators.required : ''
      group[item.key] = [item.value, isRequired];
    })
    return this.fb.group(group);
  }
}
