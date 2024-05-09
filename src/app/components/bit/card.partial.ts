import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IBit } from '../../models/bit.model';
import { RouterModule } from '@angular/router';

@Component({
  templateUrl: './card.partial.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'dm-bit-card',
  standalone: true,
  imports: [RouterModule],
})
export class BitCardPartial {
  @Input() bit: IBit;

  @Output() onDelete: EventEmitter<void> = new EventEmitter();
}
