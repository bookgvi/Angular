import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../../Services/repository.service';
import { IProduct } from '../../Model/product.interface';
import { Router } from '@angular/router';
import { RestDatasourceService } from '../../Services/rest.datasource.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(
    private repo: RepositoryService,
    private restData: RestDatasourceService,
    public router: Router
  ) {
  }

  get products(): Array<IProduct> {
    return this.repo.getProducts();
  }

  get categories(): Array<string> {
    return this.repo.getCategories();
  }

  addToCart(): void {
    this.router.navigateByUrl('/cart');
  }

  ngOnInit() {
  }

}
