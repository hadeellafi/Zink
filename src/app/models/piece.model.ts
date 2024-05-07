import { ISegment, Segment } from "./segment.model";

export interface IPiece {
    id: string;
    name?: string;
    description?: String,
    segments?: ISegment[]

}
export class Piece {
    static NewInstance(data: any): IPiece {
        return {
            id: data.id,
            name: data.name,
            description: data.description,
            segments: data.segments ? data.segments.map(n => Segment.NewInstance(n)) : [],
        };
    }

    static NewInstances(data: any[]): IPiece[] {
        return data.map(n => this.NewInstance(n));
    }
}