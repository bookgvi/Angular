import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class GetDataForTableService {
  private urlForPrimeNgTable: string;

  constructor(private http: HttpClient) {
    this.urlForPrimeNgTable = '../../assets/data/filesystem.json';
  }

  getFileSystem(): Observable<object> {
    return this.http.get(this.urlForPrimeNgTable).pipe(
      // @ts-ignore
      map(res => res.data)
    );
  }
}
