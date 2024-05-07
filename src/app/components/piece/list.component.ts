import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PieceService } from "../../services/piece.service";
import { Observable, switchMap } from "rxjs";
import { IPiece } from "../../models/piece.model";
import { PieceCardComponent } from "./card.partial";
import { ToastState } from "../../services/toast.state";
import { PieceListState } from "../../services/piecelist.state";

@Component({
    templateUrl: './list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule, RouterModule, PieceCardComponent],
    providers: [PieceListState]
})
export class PieceListComponent implements OnInit {

    // TASK:02 get list of pieces from a service. let the service return static json
    // Bind the list to the returned result
    // Every item in the list should have a link to the details page

    pieces$!: Observable<IPiece[]>;


    constructor(private pieceService: PieceService,
        private pieceListState: PieceListState,
        private toast: ToastState) {
        //
    }
    ngOnInit(): void {
        this.pieces$ = this.pieceService.GetPieces().pipe(switchMap(res => this.pieceListState.SetList(res)));
    }
    deletePiece(piece: IPiece) {
        this.pieceService.DeletePiece(piece.id).subscribe({
            next: (res) => {
                if (res) {
                    // if deleted successfully, remove from the list, and notify toast
                    this.pieceListState.deleteItem(piece);
                    this.toast.updateState({message:`${piece.name} deleted`})

                }
            }
        });
    }
}
