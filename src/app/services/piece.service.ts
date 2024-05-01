import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IPiece } from '../models/piece.model';


@Injectable({providedIn: 'root'})
export class PieceService {

    private _listUrl = '/pieces';
    private _detailUrl = '/pieces/:id';

    // TASK:03: use HTTPClient to get data from API
    // use the nodejs server in Backend
    // TASK:03: create an http interceptor to prefix the url with http://localhost:1300/api
    // keep that value in environment.ts

    constructor(private http: HttpClient) {

    }

    GetPieces(): Observable<IPiece[]> {
      return this.http.get(this._listUrl).pipe(
        map((response: any) => <IPiece[]>response.data)
      );
    }

    GetPiece(id: string): Observable<IPiece> {
      return this.http.get(this._detailUrl.replace(':id', id)).pipe(
        map((response: any) => <IPiece>response.data)
      );
    }


  // TASK:04: add "create" "update" and "delete" methods here
  // name them: CreatePiece, UpdatePiece, DeletePiece

}
