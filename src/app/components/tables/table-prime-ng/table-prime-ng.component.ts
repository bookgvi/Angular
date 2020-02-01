import { Component, OnInit } from '@angular/core';
import { GetDataForTableService } from '../../../services/get-data-for-table.service';

@Component({
  selector: 'app-table-prime-ng',
  templateUrl: './table-prime-ng.component.html',
  styleUrls: ['./table-prime-ng.component.css']
})
export class TablePrimeNgComponent implements OnInit {
  public files: object;
  public cols: object[] = [
    { field: 'name', header: 'Name' },
    { field: 'size', header: 'Size' },
    { field: 'type', header: 'Type' }
  ];

  constructor(private nodeService: GetDataForTableService) {
  }

  ngOnInit() {
    this.nodeService.getFileSystem().subscribe(res => {
      this.files = res;
    });
  }

}
