import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { ToastState } from '../../lib/toast/toast.state';
import { IIngredient } from '../../models/ingredients.model';
import { IngredientService } from '../../services/ingredient.service';
import { IngredientState } from '../../services/ingredient.state';
import { IngredientDetailsPartial } from './details.partial';

@Component({
  templateUrl: './list.partial.html',
  selector: 'dm-ingredient-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, IngredientDetailsPartial],
  providers: [],
})
export class IngredientListPartial implements OnInit {
  @Input() bitId: string;
  selectedIngredient$: BehaviorSubject<IIngredient> =
    new BehaviorSubject<IIngredient>(null);

  ingredients$: Observable<IIngredient[]>;
  constructor(
    private ingredientStateService: IngredientState,
    private ingredientService: IngredientService,
    private toast: ToastState
  ) {}
  ngOnInit(): void {
    this.ingredients$ = this.ingredientService
      .GetIngredients(this.bitId)
      .pipe(
        switchMap((ingredients) =>
          this.ingredientStateService.SetList(ingredients)
        )
      );
  }
  displayDetails(ingredient: IIngredient) {
    this.selectedIngredient$.next(ingredient);
  }
  deleteIngredient(ingredient: IIngredient) {
    this.ingredientService.DeleteIngredient(this.bitId, ingredient).subscribe({
      next: (res) => {
        if (res) {
          this.ingredientStateService.deleteItem(ingredient);
          this.toast.updateState({ message: `${ingredient.name} deleted` });
        }
      },
    });
    this.selectedIngredient$.next(null);
  }
}
