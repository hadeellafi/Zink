import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CapitalizePipe } from '../../lib/pipes/capitalize.pipe';
import { ToastState } from '../../lib/toast/toast.state';
import { IBit } from '../../models/bit.model';
import { BitService } from '../../services/bit.service';
import { IngredientState } from '../../services/ingredient.state';
import { TitleService } from '../../utils/title.service';
import { IngredientDetailsPartial } from '../ingredient/details.partial';
import { IngredientListPartial } from '../ingredient/list.partial';
import { IIngredient } from '../../models/ingredients.model';
import { IngredientService } from '../../services/ingredient.service';

@Component({
  templateUrl: './details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    IngredientDetailsPartial,
    CapitalizePipe,
    IngredientListPartial,
    RouterModule,
  ],
  providers: [IngredientState],
})
export class BitDetailsComponent implements OnInit {
  @Input() id: string;
  bit$: Observable<IBit>;
  // TASK:04: trun this into behavior subject. Listen to changes to pass value to details.partial component
  selectedIngredient$: BehaviorSubject<IIngredient | null> =
    new BehaviorSubject<IIngredient | null>(null);

  constructor(
    private bitService: BitService,
    private titleService: TitleService,
    private ingredientState: IngredientState,
    private router: Router,
    private toast: ToastState,
    private ingredientService: IngredientService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.bit$ = this.bitService.GetBit(this.id).pipe(
      tap((res) => {
        this.titleService.setTitle(<string>res.name);
      })
    );
    // TASK:04: tap into the returned result and update the page title via TitleService, using the name
  }

  // displayDetails(ingredient: IIngredient) {
  //     this.selectedIngredient$.next(ingredient);
  // }
  deleteBit(bit: IBit) {
    this.bitService.DeleteBit(bit).subscribe({
      next: (res) => {
        if (res) {
          this.toast.updateState({ message: `${bit.name} Deleted` });
          this.router.navigateByUrl('/bits');
        }
      },
    });
  }
  // TASK:06 make this a sub route instead of a sub component
  // getIngredient(ingredient: IIngredient) {
  //   this.selectedIngredient$.next(ingredient);

  // }
  getIngredient(ingredient: IIngredient) {
    this.router.navigate([`./ingredient/${ingredient.id}`], {
      relativeTo: this.route,
    });
  }

  deleteIngredient(ingredient: IIngredient) {
    // in order to delete, we need to call a service that does not exist here.
    // options?
    // 1. inject service (simplest)
    // 2. delegate to a state service (later)
    // 3. call a public method of the list partial (this is the WORST. AVOID)

    this.ingredientService.DeleteIngredient(this.id, ingredient).subscribe({
      next: (res) => {
        if (res) {
          this.toast.updateState({ message: 'Deleted Ingredient' });
          // now update the state
          this.ingredientState.deleteItem(ingredient);

          // now clear the selected ingredient
          this.selectedIngredient$.next(null);
        }
      },
    });
  }
}
