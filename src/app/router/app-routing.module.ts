import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RxjsShedulerComponent } from '../components/rxjs-sheduler/rxjs-sheduler.component';
import { ObserverComponent } from '../components/observer/component/observer.component';


const routes: Routes = [
  { path: 'scheduler', component: RxjsShedulerComponent },
  { path: 'observer', component: ObserverComponent },
  { path: '**', redirectTo: '/scheduler' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
