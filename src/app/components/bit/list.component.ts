import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IBit } from '../../models/bit.model';
import { BitService } from '../../services/bit.service';
import { BitCardComponent } from './card.partial';
import { CommonModule } from '@angular/common';

@Component({
    templateUrl: './list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [BitCardComponent,CommonModule]
})
export class BitListComponent implements OnInit {
  bits$: BehaviorSubject<IBit[]> = new BehaviorSubject<IBit[]>([]);

  constructor(private bitService: BitService) {}

  ngOnInit(): void {
    this.loadBits();
  }

  onDelete(id: string) {
    this.bitService.DeleteBit(id).subscribe(() => {
      this.loadBits();
    });
  }

  loadBits() {
    this.bitService.GetBits().subscribe((bits: IBit[]) => {
      this.bits$.next(bits);
    });
  }
}
