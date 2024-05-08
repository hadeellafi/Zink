import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, tap } from "rxjs";
import { CapitalizePipe } from "../../lib/pipes/capitalize.pipe";
import { IBit } from "../../models/bit.model";
import { BitService } from "../../services/bit.service";
import { ToastState } from "../../services/toast.state";
import { TitleService } from "../../utils/title.service";
import { IngredientDetailsPartial } from "../ingredient/details.partial";
import { IngredientListPartial } from "../ingredient/list.partial";
import { IngredientState } from "../../services/ingredient.state";


@Component({
    templateUrl: "./details.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule, IngredientDetailsPartial, CapitalizePipe, IngredientListPartial],
    providers: [IngredientState]
})
export class BitDetailsComponent implements OnInit {

    @Input() id: string;
    bit$: Observable<IBit>;
    // TASK:04: trun this into behavior subject. Listen to changes to pass value to details.partial component
    // selectedIngredient$: BehaviorSubject<IIngredient> = new BehaviorSubject<IIngredient>(null);

    constructor(private bitService: BitService,
        private titleService: TitleService,
        private router: Router,
        private toast: ToastState
    ) {

    }


    ngOnInit(): void {
        this.bit$ = this.bitService.GetBit(this.id).pipe(
            tap(res => { this.titleService.setTitle(res.name) })
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
            }

        })

    }

}