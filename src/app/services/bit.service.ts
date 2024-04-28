import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IBit } from "../models/bit.model";

const tempBits = [
  { id: '15d36b37-9fd7-4246-bf2d-e88eda088ba5', name: 'Apple' },
  { id: 'd4f940c1-2915-46f0-b03b-068921b8ff69', name: 'Orange' },
  { id: '056c18e2-5b12-49a6-bf7f-f7fbcdf731bb', name: 'Tomato' },
  { id: 'dc7ed92e-a375-4e44-8655-81a99cd7cc23', name: 'Pineapple' },
];

@Injectable({ providedIn: 'root' })
export class BitService {


  getBits(): Observable<IBit[]> {
    return of(tempBits);
  }
}
