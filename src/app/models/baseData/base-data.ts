export class BaseData<T> {
  public key: string;
  public value: T;
  public id: number;
  public isRequired: boolean;
  public controlType: string;

  constructor(options: {
    key?: string,
    value?: T,
    id?: number,
    isRequired?: boolean,
    controlType?: string
  }) {
    this.key = options.key || '';
    this.value = options.value;
    this.id = options.id || null;
    this.isRequired = !!options.isRequired || false;
    this.controlType = options.controlType || '';
  }
}
