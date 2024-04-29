import { Injectable } from "@angular/core";
import { IPiece } from "../models/piece.model";
import { Observable, of } from "rxjs";
const tempPieces = [
    { "id": "04b79f11-6e6b-4b33-a20b-0cb3096c5684", "name": "chunk" },
    { "id": "acd22a61-ac34-41b3-8fb1-d375a473e214", "name": "bite" },
    { "id": "d38a8108-be3a-4543-bb22-65763ccc3d2b", "name": "spoon" },
    { "id": "83f8b21c-acd9-42e1-aee3-480a3dfa68f5", "name": "pile" }
]
const piece = {
    "id": "04b79f11-6e6b-4b33-a20b-0cb3096c5684",
    "name": "chunk",
    "description": "Chunk a list into smaller lists of a specified size.",
    "segments": [
        { "id": "46101494-189a-40a9-a599-d1adde0c6251", "name": "morning", "from": "8:00", "to": "10:00" },
        { "id": "e15f2b0c-034c-4e5c-a898-f8044ddba3fe", "name": "afternoon", "from": "10:00", "to": "12:00" },
        { "id": "84f840b8-aa5f-4793-a574-53397dfd3614", "name": "evening", "from": "12:00", "to": "18:00" },
        { "id": "d13ed645-571d-49fa-bd51-7121396b8c47", "name": "night", "from": "18:00", "to": "22:00" },
        { "id": "f1b3b3b4-4b3b-4b3b-4b3b-4b3b4b3b4b3b", "name": "late night", "from": "22:00", "to": "00:00" }
    ]
}


@Injectable({ providedIn: 'root' })
export class PieceService {

    GetPieces(): Observable<IPiece[]> {
        console.log(typeof(tempPieces));
        return of(tempPieces);
    }
    GetPiece(id: string): Observable<IPiece> {
        // return of(tempPieces.find(n => n.id === id));
        return of(piece);
    }
}
