import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-form-key-filtering',
  templateUrl: './form-key-filtering.component.html',
  styleUrls: ['./form-key-filtering.component.css']
})
export class FormKeyFilteringComponent implements OnInit {
  intRegex: RegExp = /\d/g;
  blockSpecial: RegExp = /^[^<>*!]+$/;
  blockSpace: RegExp = /[^\s]/;
  ccRegex: RegExp = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
  cc: string;
  num: string;
  int: string;
  aa: string;

  constructor() {
  }

  hInput(form, name) {
    console.log(form);
    this[name] = form.controls[name].invalid;
  }
  ngOnInit() {
  }

}
