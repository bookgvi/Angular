import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class GetDataForTableService {
  private urlForPrimeNgTable: string = '../../assets/data/filesystem.json';

  constructor(private http: HttpClient) {
  }

  getFileSystem(): Observable<object> {
    return this.http.get(this.urlForPrimeNgTable).pipe(
      // @ts-ignore
      map(res => res.data)
    );
  }
}
