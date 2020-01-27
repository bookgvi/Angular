import { IModel } from './interface.model';

export class ProductModel implements IModel {
  constructor(
    public id: number,
    public name: string,
    public category: string,
    public description: string,
    public price: number
  ) {
  }
}
