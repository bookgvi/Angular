import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators, Form } from '@angular/forms';
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

  constructor(private fb: FormBuilder) {
    /**
     *
     * Manual form fills
     *
     */
    // this.formGroup = new FormGroup({
    //   firstName: new FormControl(''),
    //   lastName: new FormControl(''),
    //   address: new FormGroup({
    //     street: new FormControl(''),
    //     city: new FormControl(''),
    //     state: new FormControl(''),
    //     zip: new FormControl('')
    //   })
    // });
    /**
     *
     * Form Builder
     *
     */
    this.formGroup = fb.group({
      firstName: [''],
      lastName: ['', Validators.required],
      address: fb.group({
        city: [''],
        state: [''],
        zip: [''],
        street: ['']
      }),
      /**
       *
       * Form Array
       *
       */
      aliases: fb.array([
        fb.control(''),
        fb.control(''),
        fb.control('')
      ])
    });
  }

  get aliases(): FormArray {
    return this.formGroup.get('aliases') as FormArray;
  }

  public onSubmit(): void {
    console.log(this.formGroup);
    this.formGroup.patchValue({
      lastName: 'Jovani',
      address: {
        city: 'Moscow',
        zip: 111000
      }
    });
  }

  ngOnInit() {
    this.valueSubscription = this.formGroup.valueChanges.subscribe((value: Observer<string>) => {
    });
    this.statusSubscription = this.formGroup.statusChanges.subscribe((value: Observer<any>) => {
      console.log(value);
    });
  }

  ngOnDestroy(): void {
    this.valueSubscription.unsubscribe();
    this.statusSubscription.unsubscribe();
  }

}
