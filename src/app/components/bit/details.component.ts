import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { IBit } from "../../models/bit.model";
import { BitService } from "../../services/bit.service";
import { DetailsPartialComponent } from "./details.partial";
import { IIngredient } from "../../models/ingredients.model";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
    templateUrl: "./details.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule, DetailsPartialComponent]
})
export class BitDetailsComponent implements OnInit {

    @Input() id: string;
    bit$: Observable<IBit>;
    // TASK:04: trun this into behavior subject. Listen to changes to pass value to details.partial component
    selectedIngredient$: BehaviorSubject<IIngredient> = new BehaviorSubject<IIngredient>(null);

    constructor(private bitService: BitService, private titleService: Title, private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.bit$ = this.bitService.GetBit(this.id).pipe(
            tap(res => { this.titleService.setTitle(res.name) })
        );
        // TASK:04: tap into the returned result and update the page title via TitleService, using the name

    }

    displayDetails(ingredient: IIngredient) {
        this.selectedIngredient$.next(ingredient);
    }
    onDelete() {
        this.bitService.DeleteBit(this.id)
        this.router.navigate(['../'], { relativeTo: this.route })

    }

}