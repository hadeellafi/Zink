import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { IIngredient } from "../../models/ingredients.model";

@Component({
    selector: "dm-bit-details",
    templateUrl: "./details.partial.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule]
})
export class DetailsPartialComponent {
    @Input() ingredient: IIngredient;
}