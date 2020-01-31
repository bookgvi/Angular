import { NgModule } from '@angular/core';
import { NgbdTableCompleteModule} from '../components/tables/bootstrap-table/table-complete.module';
import { TablesComponent } from '../components/tables/tables.component';

import { FormsComponent } from '../components/forms/forms.component';

import { ChartsComponent } from '../components/charts/charts.component';

@NgModule({
  declarations: [
    TablesComponent,
    FormsComponent,
    ChartsComponent
  ],
  imports: [
    NgbdTableCompleteModule
  ],
  exports: [
    NgbdTableCompleteModule
  ]
})
export class TablesModule {
}
