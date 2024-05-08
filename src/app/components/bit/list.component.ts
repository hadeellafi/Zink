import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { IBit } from '../../models/bit.model';
import { BitService } from '../../services/bit.service';
import { BitListState } from '../../services/bit.state';
import { ToastState } from '../../services/toast.state';
import { BitCardPartial } from './card.partial';

@Component({
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [BitCardPartial , CommonModule],
  providers: [BitListState]
})
export class BitListComponent implements OnInit {
  bits$: Observable<IBit[]>;

  constructor(private bitService: BitService,
    private bitListState: BitListState,
    private toast: ToastState) { }

  ngOnInit(): void {
    this.bits$ = this.bitService.GetBits().pipe(
      switchMap(bits => this.bitListState.SetList(bits))
    );
  }

  deleteBit(bit: IBit) {
    this.bitService.DeleteBit(bit).subscribe({
      next: res => {
        if (res) {
          this.bitListState.deleteItem(bit);
          this.toast.updateState({ message: 'Deleted' });
        }
      }
    })
  }


}
