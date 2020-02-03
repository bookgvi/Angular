import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableMainComponent } from '../components/tables/table-main/table-main.component';
import { ChartsComponent } from '../components/charts/charts-main/charts.component';
import { FormMainComponent } from '../components/forms/form-main/form-main.component';

const routes: Routes = [
  { path: 'tables', component: TableMainComponent },
  { path: 'forms', component: FormMainComponent },
  { path: 'charts', component: ChartsComponent },
  { path: '**', redirectTo: '/tables' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
