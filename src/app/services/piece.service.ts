import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IPiece, Piece } from '../models/piece.model';
import { ISegment } from '../models/segment.model';
import { Config } from '../utils/config';


@Injectable({ providedIn: 'root' })
export class PieceService {

  private _listUrl = Config.Api.piece.list;
  private _detailUrl = Config.Api.piece.details;
  private _createUrl = Config.Api.piece.create;
  private _updateUrl = Config.Api.piece.update;
  private _deleteUrl = Config.Api.piece.delete;

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
      map((response: any) => Piece.NewInstance(response))
    );
  }
  DeletePiece(id: string): Observable<boolean> {
    return this.http.delete(this._deleteUrl.replace(':id', id)).pipe(
      map((response: any) => response)
    );
  }

  // TASK:05 creaet an AddSegment, UpdateSegment, DeleteSegment. No REST available for those

  AddSegment(piece: IPiece, segment: any): Observable<IPiece> {
    return this.UpdatePiece(Piece.AddSegment(piece, segment));
  }
  DeleteSegment(piece: IPiece, segment: ISegment): Observable<IPiece> {
    return this.UpdatePiece(Piece.DeleteSegment(piece, segment));
  }
  UpdateSegment(piece: IPiece, segment: Partial<ISegment>): Observable<IPiece> {
    // call exising API
    return this.UpdatePiece(Piece.UpdateSegment(piece, segment));
  }

}
