import { Injectable } from '@angular/core';
import { DatasourceService } from './datasource.service';
import { IProduct } from '../Model/product.interface';

@Injectable()
export class RepositoryService {
  private products: Array<IProduct> = [];
  private categories: string[] = [];

  constructor(private dataSource: DatasourceService) {
    dataSource.getAll().subscribe(data => {
      this.products = data;
      this.categories = data.map(item => item.category)
        .filter((item, index, array) => array.indexOf(item) === index)
        .sort();
    });
  }
  getProducts(): Array<IProduct> {
    return this.products;
  }
  getCategories(): Array<string> {
    return this.categories;
  }
}
