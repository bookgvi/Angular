import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from '../components/tables/tables.component';


const routes: Routes = [
  { path: 'tables', component: TablesComponent },
  { path: '**', redirectTo: 'tables' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
