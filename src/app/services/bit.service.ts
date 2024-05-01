import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Bit, IBit } from '../models/bit.model';


@Injectable({ providedIn: 'root' })
export class BitService {

  // urls here, to be moved out later
  private _listUrl = '/bits';
  private _detailUrl = '/bits/:id';

  // TASK:03: use HTTPClient to get data from API
  // use the nodejs server in Backend
  constructor(private http: HttpClient) {

  }

 
  //TASK:04: move "data" mapper to interceptor

  GetBits(): Observable<IBit[]> {
    return this.http.get(this._listUrl).pipe(
      map((response: any) => {

        return response.map((bitData: any) => Bit.NewInstance(bitData));
      })
    );
  }

  // remove strict=true from tsconfig to have an easier life!
  // but remember, the returned element is not guaranteed
  GetBit(id: string): Observable<IBit> {
    return this.http.get(this._detailUrl.replace(':id', id)).pipe(
      map((response: any) => {

        response = Bit.NewInstance(response);
        return response;
      })
    );
  }

  // TASK:04: add "create" "update" and "delete" methods here
  // name them: CreateBit, UpdateBit, DeleteBit
}
