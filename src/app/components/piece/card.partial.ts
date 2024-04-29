import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { IPiece } from "../../models/piece.model";
import { RouterModule } from "@angular/router";

@Component({
    selector: "dm-piece-card",
    templateUrl: "./card.partial.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [RouterModule]
})
export class PieceCardComponent {
    @Input() piece: IPiece;

}