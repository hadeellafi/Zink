import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IPiece } from '../models/piece.model';

const piece1={ "id": "83f8b21c-acd9-42e1-aee3-480a3dfa68f5", "name": "pile" }


@Injectable({ providedIn: 'root' })
export class PieceService {

  private _listUrl = '/pieces';
  private _detailUrl = '/pieces/:id';
  private _editUrl = '/pieces/:id';
  private _createUrl = '/pieces';


  // TASK:03: use HTTPClient to get data from API
  // use the nodejs server in Backend
  // TASK:03: create an http interceptor to prefix the url with http://localhost:1300/api
  // keep that value in environment.ts

  constructor(private http: HttpClient) {

  }

  GetPieces(): Observable<IPiece[]> {
    return this.http.get(this._listUrl).pipe(
      map((response: any) => <IPiece[]>response)
    );
  }

  GetPiece(id: string): Observable<IPiece> {
    return this.http.get(this._detailUrl.replace(':id', id)).pipe(
      map((response: any) => <IPiece>response)
    );
  }

  // TASK:04: add "create" "update" and "delete" methods here
  // name them: CreatePiece, UpdatePiece, DeletePiece

  CreatePiece(piece: IPiece) {
    return this.http.post(this._createUrl, piece);
  }
  UpdatePiece(piece: IPiece) {
    return this.http.put(this._editUrl.replace(':id', '83f8b21c-acd9-42e1-aee3-480a3dfa68f5'), piece1);
  }
  DeletePiece(id: string) {
    return this.http.delete(this._detailUrl.replace(':id', id));
  }


}
