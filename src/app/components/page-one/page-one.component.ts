import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../../services/dataSource/data-source.service';
import { BaseData } from '../../models/baseData/base-data';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {
  public text: BaseData<string>[];

  constructor(private dataSource: DataSourceService) {
  }

  ngOnInit() {
    this.text = this.dataSource.getData();
  }

}