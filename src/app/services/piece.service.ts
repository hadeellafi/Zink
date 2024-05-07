import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IPiece, Piece } from '../models/piece.model';


@Injectable({providedIn: 'root'})
export class PieceService {

    private _listUrl = '/pieces';
    private _detailUrl = '/pieces/:id';
    private _createUrl = '/pieces';
    private _updateUrl = '/pieces/:id';
    private _deleteUrl = '/pieces/:id';

    // TASK:03: use HTTPClient to get data from API
    // use the nodejs server in Backend
    // TASK:03: create an http interceptor to prefix the url with http://localhost:1300/api
    // keep that value in environment.ts

    constructor(private http: HttpClient) {

    }

    GetPieces(): Observable<IPiece[]> {
      return this.http.get(this._listUrl).pipe(
        map((response: any) => Piece.NewInstances(response))
      );
    }

    GetPiece(id: string): Observable<IPiece> {
      return this.http.get(this._detailUrl.replace(':id', id)).pipe(
        map((response: any) => Piece.NewInstance(response))
      );
    }


  // TASK:04: add "create" "update" and "delete" methods here
  // name them: CreatePiece, UpdatePiece, DeletePiece

  CreatePiece(piece: IPiece): Observable<IPiece> {

    return this.http.post(this._createUrl, piece).pipe(
      map((response: any) => Piece.NewInstance(response))
    );
  }
  UpdatePiece(piece: IPiece): Observable<IPiece> {
    return this.http.put(this._updateUrl.replace(':id', piece.id), piece).pipe(
      map((response: any) =>Piece.NewInstance(response))
    );
  }
  DeletePiece(id: string): Observable<boolean> {
    return this.http.delete(this._deleteUrl.replace(':id', id)).pipe(
      map((response: any) => response)
    );
  }

  // TASK:05 creaet an AddSegment, UpdateSegment, DeleteSegment. No REST available for those

}
