import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { INgredient } from "../../models/ingredients.model";

@Component({
    selector: "dm-detail-partial",
    templateUrl: "./details.partial.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class DetailsPartialComponent {
    @Input() ingredient: INgredient
}