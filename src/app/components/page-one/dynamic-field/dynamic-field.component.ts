import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BaseData } from '../../../models/baseData/base-data';

@Component({
  selector: 'app-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.css']
})
export class DynamicFieldComponent implements OnInit {

  constructor() { }
  @Input() form: FormGroup;
  @Input() field: BaseData<any>;
  ngOnInit() {
  }

}
