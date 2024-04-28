import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PieceService } from "../../services/piece.service";
import { Observable } from "rxjs";
import { IPiece } from "../../models/piece.model";

@Component({
    templateUrl: './list.component.html'
    , changeDetection: ChangeDetectionStrategy.OnPush
    , standalone: true
    , imports: [CommonModule, RouterModule]
    })
export class PieceListComponent implements OnInit {

 // TASK:02 get list of pieces from a service. let the service return static json
 // Bind the list to the returned result
 // Every item in the list should have a link to the details page

 pieces$!:Observable<IPiece[]>;
   constructor(private pieceService:PieceService) {
       //
   }
   ngOnInit(): void {
       this.pieces$=this.pieceService.getPieces();
   }
}
