import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription, catchError, map, tap } from 'rxjs';
import { Bit, IBit } from '../models/bit.model';


@Injectable({ providedIn: 'root' })
export class BitService implements OnDestroy {

  sub: Subscription;
  // urls here, to be moved out later
  private _listUrl = '/bits';
  private _detailUrl = '/bits/:id';
  private _createUrl = '/bits';
  private _updateUrl = '/bits/:id';


  // TASK:03: use HTTPClient to get data from API
  // use the nodejs server in Backend
  constructor(private http: HttpClient) {

  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
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
  
  DeleteBit(id: string) {
    return this.http.delete(this._detailUrl.replace(':id', id));
  }
  CreateBit(bit: IBit) {
    return this.http.post(this._createUrl, bit);
  }
  UpdateBit(bit: IBit) {
    return this.http.post(this._updateUrl.replace(':id', bit.id), bit);
  }

}
