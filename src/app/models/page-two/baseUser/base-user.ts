export class BaseUser<T> {
  protected key: string;
  protected value: T;
  protected id: number;
  protected label: string;
  protected isRequired: boolean;
  protected controlType: string;

  constructor(options: {
    key?: string,
    value?: T,
    id?: number,
    label?: string,
    isRequired?: boolean,
    controlType?: string
  }) {
    this.key = options.key || '';
    this.value = options.value;
    this.id = options.id || Math.random() * 256;
    this.label = options.label || '';
    this.isRequired = !!options.label || false;
    this.controlType = options.controlType || 'text';
  }
}
