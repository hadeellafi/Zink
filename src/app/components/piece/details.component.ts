import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { IPiece } from "../../models/piece.model";
import { ISegment } from "../../models/segment.model";
import { PieceService } from "../../services/piece.service";
import { DetailsPartialComponent } from "./details.partial";

@Component({
    templateUrl: "./details.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule, DetailsPartialComponent]
})
export class PieceDetialsComponent implements OnInit {
    @Input() id: string;
    piece$: Observable<IPiece>;

    // TASK:04: turn this into a behavior subject

    selectedSegment$: BehaviorSubject<ISegment> = new BehaviorSubject<ISegment>(null);

    constructor(private pieceService: PieceService,private titleService:Title) {

    }

    ngOnInit(): void {
        this.piece$ = this.pieceService.GetPiece(this.id).pipe(
            tap((res) => {
                this.titleService.setTitle(res.name);
            })
        );
        // TASK:04: tap into the returned result and update the page title via TitleService, using the name

    }

    displayDetails(segment: ISegment) {
        this.selectedSegment$.next(segment);
    }

}