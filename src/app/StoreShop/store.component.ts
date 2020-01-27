import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../Services/repository.service';
import { IProduct } from '../Model/product.interface';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private repo: RepositoryService) {
  }

  get products(): Array<IProduct> {
    return this.repo.getProducts();
  }

  get categories(): Array<string> {
    return this.repo.getCategories();
  }

  ngOnInit() {
  }

}
