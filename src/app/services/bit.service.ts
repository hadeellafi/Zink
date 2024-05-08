import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Bit, IBit } from '../models/bit.model';
import { Config } from '../utils/config';


@Injectable({ providedIn: 'root' })
export class BitService {

  // urls here, to be moved out later
  // TASK:05 movet to config file (on root is better place for it /config.ts)
  private _listUrl = Config.Api.bit.list;
  private _detailUrl = Config.Api.bit.details;
  private _createUrl = Config.Api.bit.create;
  private _updateUrl = Config.Api.bit.update;
  private _deleteUrl = Config.Api.bit.delete;

  // TASK:03: use HTTPClient to get data from API
  // use the nodejs server in Backend
  constructor(private http: HttpClient) {

  }


  //TASK:04: move "data" mapper to interceptor

  GetBits(): Observable<IBit[]> {
    return this.http.get(this._listUrl).pipe(
      map((response: any) => Bit.NewInstances(response))
    );
  }

  // remove strict=true from tsconfig to have an easier life!
  // but remember, the returned element is not guaranteed
  GetBit(id: string): Observable<IBit> {
    return this.http.get(this._detailUrl.replace(':id', id)).pipe(
      map((response: any) => Bit.NewInstance(response))
    );
  }
  // TASK:04: add "create" "update" and "delete" methods here
  // name them: CreateBit, UpdateBit, DeleteBit

  DeleteBit(bit: IBit): Observable<boolean> {
    return this.http.delete(this._deleteUrl.replace(':id', bit.id)).pipe(
      map((response: any) => response)
    );
  }
  CreateBit(bit: IBit): Observable<IBit> {
    return this.http.post(this._createUrl, bit).pipe(
      map((response: any) => Bit.NewInstance(response))
    );
  }
  UpdateBit(bit: IBit): Observable<IBit> {
    return this.http.put(this._updateUrl.replace(':id', bit.id), bit).pipe(
      map((response: any) => Bit.NewInstance(response))
    );
  }

  // TASK:05: seperate ingredients into its own service with its own REST methods
  // also reflect that on model and components, create a new folder for ingredients
}
