import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "../../environments/environment";
import { IBit } from "../models/bit.model";


@Injectable({ providedIn: 'root' })
export class BitService {

  // TASK:03: use HTTPClient to get data from API

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {

  }

  GetBits(): Observable<IBit[]> {
    return this.http.get(`${this.apiUrl}/bits`).pipe(
      map((response: any) => <IBit[]>response.data)
    );
  }


  GetBit(id: string): Observable<IBit> {
    return this.http.get(`${this.apiUrl}/bits/${id}`).pipe(map((response: any) => {
      return <IBit>response.data;
    })
    )
  }
}