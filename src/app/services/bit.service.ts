import { Injectable } from "@angular/core";
import { Bit } from "../models/bit.model";

@Injectable({ providedIn: 'root' })
export class BitService  {
private bits:Bit[]=[new Bit("16d","Apple"),new Bit("15d","Orange")]

getBits(){
    return this.bits;
}
}
