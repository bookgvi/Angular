import { BaseUser } from '../baseUser/base-user';

export class User1 extends BaseUser<string> {
  constructor(options: Object = {}) {
    super(options);
  }
}
