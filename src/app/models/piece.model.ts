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
    // non static methods is tempting, but too hard to maintain
    // keep them static as in "functional programming"
    static UpdateSegment(piece: IPiece, segment: Partial<ISegment>): IPiece {
        // map, clones the array, we can use it to clone the elements in the array as well
        const _segments = piece.segments.map(n => {
            // anything missing? ...n, ...segment will fill it out
            return n.id === segment.id ? { ...n, ...segment } : n;
        });
        return { ...piece, segments: _segments };

    }

    static AddSegment(piece: IPiece, segment: ISegment): IPiece {
        // simply add the segment to the of segments
        return { ...piece, segments: [...piece.segments, segment] };
    }

    static DeleteSegment(piece: IPiece, segment: ISegment): IPiece {
        // remove the segment
        return { ...piece, segments: piece.segments.filter(n => n.id !== segment.id) };
    }
}

