import { NgModule } from '@angular/core';
import { RepositoryService } from '../Services/repository.service';
import { DatasourceService } from '../Services/datasource.service';

@NgModule({
  declarations: [],
  providers: [
    RepositoryService,
    DatasourceService
  ]
})
export class ModelModule {
}
