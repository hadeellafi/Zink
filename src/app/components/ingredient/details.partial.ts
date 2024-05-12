import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { IIngredient } from '../../models/ingredients.model';
import { IngredientService } from '../../services/ingredient.service';
import { IngredientState } from '../../services/ingredient.state';

@Component({
  selector: 'dm-ingredient-details',
  templateUrl: './details.partial.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class IngredientDetailsPartial implements OnInit {
  ingredient$: Observable<IIngredient | undefined>;

  @Output() onDelete: EventEmitter<void> = new EventEmitter();

  bitId: string;
  ingredientId: string;

  constructor(
    private route: ActivatedRoute,
    private ingredientService: IngredientService,
    private ingredientState: IngredientState
  ) {
    this.route.params.subscribe((params) => {
      this.bitId = params['id'];
      this.ingredientId = params['ingredientId'];
    });
  }
  ngOnInit(): void {
    this.ingredient$ = this.ingredientService
      .GetIngredients(this.bitId)
      .pipe(
        map((ingredients) =>
          ingredients.find((ingredient) => ingredient.id === this.ingredientId)
        )
      );
  }
}
