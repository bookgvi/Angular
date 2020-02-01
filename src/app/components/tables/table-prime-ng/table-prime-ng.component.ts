import { Component, OnInit } from '@angular/core';
import { GetDataForTableService } from '../../../services/get-data-for-table.service';
import { TreeNode } from '../../../models/data-model';

@Component({
  selector: 'app-table-prime-ng',
  templateUrl: './table-prime-ng.component.html',
  styleUrls: ['./table-prime-ng.component.css']
})
export class TablePrimeNgComponent implements OnInit {
  public files: TreeNode[];
  public fl: number = 0;
  public rowsPerPage: number[] = [2, 5, 10, 20, 50];
  public cols: object[] = [
    { field: 'name', header: 'Name' },
    { field: 'size', header: 'Size' },
    { field: 'type', header: 'Type' }
  ];

  constructor(private nodeService: GetDataForTableService) {
  }

  ngOnInit() {
    this.nodeService.getFileSystem().subscribe(res => {
      this.files = res as TreeNode[];
      this.fl = this.files.length;
    });
  }

}
