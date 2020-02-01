import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TreeTableModule } from 'primeng/treetable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    CommonModule,
    TreeTableModule,
    BrowserAnimationsModule
  ]
})
export class TablesModule {
}
