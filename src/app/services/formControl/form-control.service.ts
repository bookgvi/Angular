import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class FormControlService {

  constructor(private fb: FormBuilder) { }

  public generateForm(data): FormGroup {
    let group: any = {};
    data.forEach(item => {
        group[item.key] = [item.value];
    })
    return this.fb.group(group);
  }
}
