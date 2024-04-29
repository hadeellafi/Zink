import { ISegment } from "./segment.model";

export interface IPiece {
    id: string;
    name: string;
    description?: String,
    segments?: ISegment[]

}