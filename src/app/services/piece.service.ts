import { Injectable } from "@angular/core";
import { IPiece } from "../models/piece.model";
import { EMPTY, Observable, catchError, map, of } from "rxjs";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

// TASK:03: use HTTPClient to get data from API
// use the nodejs server in Backend
// TASK:03: create an http interceptor to prefix the url with http://localhost:1300/api
// keep that value in environment.ts

@Injectable({ providedIn: 'root' })
export class PieceService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {

    }

    GetPieces(): Observable<IPiece[]> {

        return this.http.get(`${this.apiUrl}/pieces`).pipe(
            map((response: any) => {
                return <IPiece[]>response.data;
            }))

    }
    GetPiece(id: string): Observable<IPiece> {
        return this.http.get(`${this.apiUrl}/pieces/${id}`).pipe(map((response: any) => {
            return <IPiece>response.data;
        }))
    }
}
