import { Injectable } from '@angular/core';
import { IProduct } from '../Model/product.interface';
import { Product } from '../Model/product.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class DatasourceService {
  private products: IProduct[] = [];

  constructor() {
    this.products = [
      new Product(1, 'Product 1', 'Category 1', 'Product 1 (Category 1)', 100),
      new Product(2, 'Product 2', 'Category 1', 'Product 2 (Category 1)', 100),
      new Product(3, 'Product 3', 'Category 1', 'Product 3 (Category 1)', 100),
      new Product(4, 'Product 4', 'Category 1', 'Product 4 (Category 1)', 100),
      new Product(5, 'Product 5', 'Category 1', 'Product 5 (Category 1)', 100),
      new Product(6, 'Product 6', 'Category 2', 'Product 6 (Category 2)', 100),
      new Product(7, 'Product 7', 'Category 2', 'Product 7 (Category 2)', 100),
      new Product(8, 'Product 8', 'Category 2', 'Product 8 (Category 2)', 100)
    ];
  }


  getAll(): Observable<IProduct[]> {
    return of(this.products);
  }
}
