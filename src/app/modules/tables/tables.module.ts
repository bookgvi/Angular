import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TreeTableModule } from 'primeng/treetable';
import { CommonModule } from '@angular/common';

import { GetDataForTableService } from '../../services/get-data-for-table.service';

import { TableMainComponent } from '../../components/tables/table-main/table-main.component';
import { TablePrimeNgComponent } from '../../components/tables/table-prime-ng/table-prime-ng.component';

@NgModule({
  declarations: [
    TableMainComponent,
    TablePrimeNgComponent
  ],
  providers: [GetDataForTableService],
  imports: [
    HttpClientModule,
    TreeTableModule,
    CommonModule
  ]
})
export class TablesModule {
}
