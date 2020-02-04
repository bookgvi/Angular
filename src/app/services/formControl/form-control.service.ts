import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class FormControlService {

  constructor() { }

  public generateForm(data): FormGroup {
    let group: any = {};
    data.forEach(item => {
        group[item.key] = new FormControl(item.value);
    })
    console.log(data, group);
    return new FormGroup(group);
  }
}
