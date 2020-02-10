import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsShedulerComponent } from '../components/rxjs-sheduler/rxjs-sheduler.component';


const routes: Routes = [
  { path: 'sheduler', component: RxjsShedulerComponent },
  { path: '**', redirectTo: '/sheduler' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
