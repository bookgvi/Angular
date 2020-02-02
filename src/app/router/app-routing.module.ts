import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableMainComponent } from '../components/tables/table-main/table-main.component';
import { ChartsComponent } from '../components/charts-main/charts.component';

const routes: Routes = [
  { path: 'tables', component: TableMainComponent },
  { path: 'forms', component: TableMainComponent },
  { path: 'charts', component: ChartsComponent },
  { path: '**', redirectTo: '/tables' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
