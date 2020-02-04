import { Injectable } from '@angular/core';
import { BaseUser } from 'src/app/models/page-two/baseUser/base-user';
import { User1 } from '../../../models/page-two/user1/user1';

@Injectable()
export class DataserviceService {
  private data: BaseUser<any>[];
  constructor() {
    this.data = [
      new User1({
        key: name,
        value: 'John Doe',
        id: 1,
        label: 'Name: ',
        isRequired: true,
        controlType: 'text'
      }),
      new User1({
        key: 'phone',
        value: 79112334455,
        id: 2,
        label: 'Phone: ',
        isRequired: false,
        controlType: 'phone'
      })
    ]
  }
  public getData(): BaseUser<any>[] {
    return this.data;
  }
}
