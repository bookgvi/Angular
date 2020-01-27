import { IProduct } from './product.interface';

export class Product implements IProduct {
  constructor(
    public id: number,
    public name: string,
    public category: string,
    public description: string,
    public price: number
  ) {
  }
}
