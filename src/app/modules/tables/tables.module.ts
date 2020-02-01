import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TreeTableModule } from 'primeng/treetable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from 'primeng/dragdrop';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';

import { GetDataForTableService } from '../../services/get-data-for-table.service';
import { CarService } from '../../services/car.service';

import { TableMainComponent } from '../../components/tables/table-main/table-main.component';
import { TablePrimeNgComponent } from '../../components/tables/table-prime-ng/table-prime-ng.component';
import { DragDropComponent } from '../../components/tables/drag-drop/drag-drop.component';

@NgModule({
  declarations: [
    TableMainComponent,
    TablePrimeNgComponent,
    DragDropComponent
  ],
  providers: [GetDataForTableService, CarService],
  imports: [
    HttpClientModule,
    CommonModule,
    TreeTableModule,
    BrowserAnimationsModule,
    DragDropModule,
    PanelModule,
    TableModule
  ]
})
export class TablesModule {
}
