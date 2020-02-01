import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservableComponent } from '../components/observable/observable.component';
import { SubjectComponent } from '../components/subject/subject.component';
import { ObsWithServiceComponent } from '../components/obs-with-service/obs-with-service.component';
import { AsyncPipeComponent } from '../components/async-pipe/async-pipe.component';


const routes: Routes = [
  { path: 'observe', component: ObservableComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'owserv', component: ObsWithServiceComponent },
  { path: 'asyncpipe', component: AsyncPipeComponent },
  { path: '**', redirectTo: '/observe' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
