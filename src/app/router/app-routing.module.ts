import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from '../components/tables/tables.component';
import { FormsComponent } from '../components/forms/forms.component';
import { ChartsComponent } from '../components/charts/charts.component';


const routes: Routes = [
  { path: 'tables', component: TablesComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'charts', component: ChartsComponent },
  { path: '**', redirectTo: 'tables' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
