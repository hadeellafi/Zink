export interface ISegment {
  id: string;
  name?: string;
  from?: string;
  to?: string;
}
export class Segment {
  public static NewInstance(data: any): ISegment {
    return {
      id: data.id,
      name: data.name,
      from: data.from,
      to: data.to,
    };
  }
}
