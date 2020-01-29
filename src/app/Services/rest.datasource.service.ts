import { Injectable } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestDatasourceService {
  private baseURL: string = 'https://pre.ugoloc.ucann.ru/api/auth/login';

  constructor() {
  }

  // public authLogin(): Observable<object> {
  //   return this.http.post(this.baseURL, {
  //     login: 'artem',
  //     password: '123456'
  //   });
  // }
}
