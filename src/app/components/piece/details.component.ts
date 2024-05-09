import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { ToastState } from '../../lib/toast/toast.state';
import { IPiece } from '../../models/piece.model';
import { ISegment } from '../../models/segment.model';
import { PieceService } from '../../services/piece.service';
import { PieceState } from '../../services/piece.state';
import { TitleService } from '../../utils/title.service';
import { PieceDetailsPartial } from './details.partial';

@Component({
  templateUrl: './details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, PieceDetailsPartial],
  providers: [PieceState],
})
export class PieceDetailsComponent implements OnInit {
  @Input() id: string;
  piece$: Observable<IPiece>;

  // TASK:04: turn this into a behavior subject

  selectedSegment$: BehaviorSubject<ISegment> = new BehaviorSubject<ISegment>(
    null
  );

  constructor(
    private pieceService: PieceService,
    private titleService: TitleService,
    private pieceState: PieceState,
    private toast: ToastState
  ) {}

  ngOnInit(): void {
    this.piece$ = this.pieceService.GetPiece(this.id).pipe(
      switchMap((piece) => this.pieceState.setState(piece)),

      // TASK:04: tap into the returned result and update the page title via TitleService, using the name
      tap((piece) => this.titleService.setTitle(piece.name))
    );
  }

  getSegment(segment: ISegment) {
    // progresss
    this.selectedSegment$.next(segment);
  }
  saveSegment(segment: Partial<ISegment>, piece: IPiece) {
    // TASK:05: refactor, move this to model and service

    // two options available,
    // 1. either call the service directly:
    this.pieceService.UpdateSegment(piece, segment).subscribe({
      next: (res) => {
        // have a peak
        // TASK:05 move response logging for all responses to interceptor
        // console.log(res);

        // hide the save form by simply setting the selected segment to null
        this.selectedSegment$.next(null);

        // notify the toaster (global state)
        this.toast.updateState({ message: 'Done' });

        // update the segments, or the piece (local state)
        this.pieceState.updateState(res);
      },
    });

    // 2. or call the model first, then the sevice
    // const _newpiece = Piece.UpdateSegment(piece, segment);
    // this.pieceService.UpdatePiece(_newpiece)...
  }
}
