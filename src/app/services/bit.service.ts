import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IBit } from "../models/bit.model";

const tempBits = [
  { id: '15d36b37-9fd7-4246-bf2d-e88eda088ba5', name: 'Apple' },
  { id: 'd4f940c1-2915-46f0-b03b-068921b8ff69', name: 'Orange' },
  { id: '056c18e2-5b12-49a6-bf7f-f7fbcdf731bb', name: 'Tomato' },
  { id: 'dc7ed92e-a375-4e44-8655-81a99cd7cc23', name: 'Pineapple' },
];
const bit = {
  "id": "15d36b37-9fd7-4246-bf2d-e88eda088ba5",
  "name": "Apple",
  "taste": "SWEET",
  "ingredients": [
    {
      "name": "apple",
      "quantity": "14244",
      "id": "86b5667c-e5cb-4fe2-81c0-949ecf5c4f1b"
    },
    {
      "name": "sugar",
      "quantity": "2344",
      "id": "f4b3b3b4-4b1b-4b1b-8b1b-4b1b4b1b4b1b"
    },
    {
      "name": "water",
      "quantity": "63992",
      "id": "00ac9613-2a7f-47b8-996b-0b27f8031763"
    }
  ]
}

@Injectable({ providedIn: 'root' })
export class BitService {


  GetBits(): Observable<IBit[]> {
    return of(tempBits);
  }
  GetBit(id: string): Observable<IBit> {
    //return of(tempBits.find(n=>n.id===id))
    return of(bit);
  }
}
