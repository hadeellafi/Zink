import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Observable } from "rxjs";
import { IBit } from "../../models/bit.model";
import { BitService } from "../../services/bit.service";
import { DetailsPartialComponent } from "./details.partial";
import { IIngredient } from "../../models/ingredients.model";


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
    selectedIngredient: IIngredient;

    constructor(private bitService: BitService) {

    }

    ngOnInit(): void {
        this.bit$ = this.bitService.GetBit(this.id);
        // TASK:04: tap into the returned result and update the page title via TitleService, using the name

    }

    displayDetails(ingredient: IIngredient) {
        this.selectedIngredient = ingredient
    }

}