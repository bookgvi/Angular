import { BaseData } from '../baseData/base-data';

export class TextBox extends BaseData<string> {
  public controlType: string;
  private type: string;
  constructor (options: Object = {}) {
    super(options);
    this.controlType = 'textBox';
    this.type = options['type'] || '';
  }
}
