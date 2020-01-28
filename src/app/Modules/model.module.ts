import { NgModule } from '@angular/core';
import { RepositoryService } from '../Services/repository.service';
import { DatasourceService } from '../Services/datasource.service';
import { RestDatasourceService } from '../Services/rest.datasource.service';

@NgModule({
  declarations: [],
  providers: [
    RepositoryService,
    DatasourceService,
    RestDatasourceService
  ]
})
export class ModelModule {
}
