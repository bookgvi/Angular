import { Injectable } from '@angular/core';
import { BaseData } from '../../models/baseData/base-data';
import { TextBox } from '../../models/textBox/text-box';

@Injectable()
export class DataSourceService {
  private text: BaseData<string>[];

  constructor() {
    this.text = [
      new TextBox({
        key: 'name',
        value: 'Text1',
        id: 1,
        isRequired: true
      }),
      new TextBox({
        key: 'email',
        value: 'qqq@qqq.qq',
        id: 2,
        isRequired: true,
        type: 'email'
      })
    ]
  }

  public getData(): BaseData<string>[] {
    return this.text;
  }
}