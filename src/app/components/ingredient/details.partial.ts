import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IIngredient } from '../../models/ingredients.model';

@Component({
  selector: 'dm-ingredient-details',
  templateUrl: './details.partial.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class IngredientDetailsPartial {
  @Input() ingredient: IIngredient;
  @Output() onDelete: EventEmitter<void> = new EventEmitter();
}
