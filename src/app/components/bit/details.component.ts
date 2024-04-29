import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Observable } from "rxjs";
import { IBit } from "../../models/bit.model";
import { BitService } from "../../services/bit.service";
import { DetailsPartialComponent } from "./details.partial";
import { INgredient } from "../../models/ingredients.model";


@Component({
    templateUrl: "./details.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule, DetailsPartialComponent]
})
export class BitDetailsComponent implements OnInit {

    @Input() id: string;
    bit$: Observable<IBit>;
    selectedIngredient: INgredient;

    constructor(private bitService: BitService) {

    }

    ngOnInit(): void {
        this.bit$ = this.bitService.GetBit(this.id);
    }

    DisplayDetails(ingredient: INgredient) {
        this.selectedIngredient = ingredient
    }

}