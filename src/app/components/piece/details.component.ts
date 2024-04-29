import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { IPiece } from "../../models/piece.model";
import { ISegment } from "../../models/segment.model";
import { PieceService } from "../../services/piece.service";
import { Observable } from "rxjs";
import { CommonModule } from "@angular/common";
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
    selectedSegment: ISegment;

    constructor(private pieceService: PieceService) {

    }

    ngOnInit(): void {
        this.piece$ = this.pieceService.GetPiece(this.id);
    }

    DisplayDetails(ingredient: ISegment) {
        this.selectedSegment = ingredient
    }

}