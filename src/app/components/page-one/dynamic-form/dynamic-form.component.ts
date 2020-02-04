import { Component, Input, OnInit } from '@angular/core';
import { BaseData } from '../../../models/baseData/base-data';
import { FormControlService } from '../../../services/formControl/form-control.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  public form: FormGroup;

  constructor(private fc: FormControlService) {
  }

  @Input() text: BaseData<string>[] = [];

  private getForm(): FormGroup {
    return this.fc.generateForm(this.text);
  }

  ngOnInit() {
    this.form = this.getForm();
  }

}
