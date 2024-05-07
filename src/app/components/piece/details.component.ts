import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { BehaviorSubject, Observable, switchMap, tap } from "rxjs";
import { IPiece } from "../../models/piece.model";
import { ISegment } from "../../models/segment.model";
import { PieceService } from "../../services/piece.service";
import { TitleService } from "../../utils/title.service";
import { PieceDetailsPartial } from "./details.partial";
import { PieceState } from "../../services/piece.state";

@Component({
    templateUrl: "./details.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule, PieceDetailsPartial],
    providers:[PieceState]
})
export class PieceDetialsComponent implements OnInit {
    @Input() id: string;
    piece$: Observable<IPiece>;

    // TASK:04: turn this into a behavior subject

    selectedSegment$: BehaviorSubject<ISegment> = new BehaviorSubject<ISegment>(null);


    constructor(private pieceService: PieceService, private titleService: TitleService,
        private pieceState: PieceState
    ) {

    }

    ngOnInit(): void {
        // this.piece$ = this.pieceService.GetPiece(this.id).pipe(
        //     tap((res) => {
        //         this.titleService.setTitle(res.name);
        //     })
        // );
        this.piece$ = this.pieceService.GetPiece(this.id).pipe(
            // since we're using piece state, we need to first set it up from service
            switchMap(piece => this.pieceState.setState(piece)),

            // TASK:04: tap into the returned result and update the page title via TitleService, using the name
            tap(piece => this.titleService.setTitle(piece.name))
        );
        // TASK:04: tap into the returned result and update the page title via TitleService, using the name

    }

    getSegment(segment: ISegment) {
        this.selectedSegment$.next(segment);
    }

}