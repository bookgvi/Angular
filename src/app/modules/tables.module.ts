import { NgModule } from '@angular/core';
import { TablesComponent } from '../components/tables/tables.component';
import { BootstrapTableComponent } from '../components/tables/bootstrap-table/bootstrap-table.component';

import { FormsComponent } from '../components/forms/forms.component';

import { ChartsComponent } from '../components/charts/charts.component';

@NgModule({
  declarations: [
    TablesComponent,
    BootstrapTableComponent,
    FormsComponent,
    ChartsComponent
  ],
  imports: []
})
export class TablesModule {
}
