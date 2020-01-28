import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from '../Components/storeShop/store.component';
import { CartComponent } from '../Components/cart/cart.component';
import { AboutComponent } from '../Components/about/about.component';
import { StoreFirstGuard } from './store-first.guard';


const routes: Routes = [
  {
    path: 'store',
    component: StoreComponent,
    canActivate: [StoreFirstGuard]
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [StoreFirstGuard]
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [StoreFirstGuard]
  },
  { path: '**', redirectTo: '/store' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
