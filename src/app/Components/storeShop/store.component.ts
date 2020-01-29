import { Component, OnDestroy, OnInit } from '@angular/core';
import { RepositoryService } from '../../Services/repository.service';
import { IProduct } from '../../Model/product.interface';
import { Router } from '@angular/router';
import { RestDatasourceService } from '../../Services/rest.datasource.service';
import { Observable, Observer, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit, OnDestroy {

  private subscribe: Subscription;

  constructor(
    private repo: RepositoryService,
    private restData: RestDatasourceService,
    public router: Router
  ) {
    // restData.authLogin().subscribe(result => {
    //   console.log(result);
    // });
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
    const subject = new Subject<number>();
    this.subscribe = subject.subscribe((res: number) => {
      console.log(res);
    });
    subject.next(2);
    this.subscribe = subject.subscribe((res: number) => {
      console.log(res);
    });
    subject.next(3);
  }

  ngOnDestroy(): void {
    console.log('Finita...');
    this.subscribe.unsubscribe();
  }
}
