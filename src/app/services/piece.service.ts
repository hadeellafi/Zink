import { Injectable } from "@angular/core";
import { Piece } from "../models/piece.model";

@Injectable({ providedIn: 'root' })
export class PieceService {
    private pieces: Piece[] = [
        new Piece("04b79f11-6e6b-4b33-a20b-0cb3096c5684", "chunk"),
        new Piece("acd22a61-ac34-41b3-8fb1-d375a473e214", "bite"),
        new Piece("d38a8108-be3a-4543-bb22-65763ccc3d2b", "spoon"),
        new Piece("83f8b21c-acd9-42e1-aee3-480a3dfa68f5", "pile")
    ]


    getPieces() {
        return this.pieces;
    }
}
