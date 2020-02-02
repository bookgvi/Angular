import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit, OnDestroy {
  public formGroup: FormGroup;
  private valueSubscription: Subscription;
  private statusSubscription: Subscription;

  constructor() {
    this.formGroup = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl('')
      })
    });
  }

  public onSubmit(): void {
    console.log(this.formGroup);
  }

  ngOnInit() {
    this.valueSubscription = this.formGroup.valueChanges.subscribe((value: Observer<string>) => {
      console.log(value);
    });
    this.statusSubscription = this.formGroup.statusChanges.subscribe((value: Observer<any>) => {
    });
  }

  ngOnDestroy(): void {
    this.valueSubscription.unsubscribe();
    this.statusSubscription.unsubscribe();
  }

}
