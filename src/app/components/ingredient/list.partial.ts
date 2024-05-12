import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { IngredientService } from '../../services/ingredient.service';
import { IngredientState } from '../../services/ingredient.state';
import { IIngredient } from '../../models/ingredients.model';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'dm-ingredient-list',
  templateUrl: './list.partial.html'
  , changeDetection: ChangeDetectionStrategy.OnPush
  , standalone: true
  , imports: [CommonModule,RouterModule]
})
export class IngredientListPartial implements OnInit {

  // this is bitid input
  @Input() id: string;
  @Output() onSelect: EventEmitter<IIngredient> = new EventEmitter();

  ingredients$: Observable<IIngredient[]>;
  constructor(private ingredientService: IngredientService,
    // inject state to keep the list
    private ingredientListState: IngredientState
  ) {
    //
  }
  ngOnInit(): void {
    this.ingredients$ = this.ingredientService.GetIngredients(this.id).pipe(
      // now set state
      switchMap(ingredients => this.ingredientListState.SetList(ingredients))
    );
  }
}
