import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { IIngredient } from "../../models/ingredients.model";
import { QuantityConvertorPipe } from "../../pipes/quantity.pipe";
import { BehaviorSubject } from "rxjs";
import { CommonModule } from "@angular/common";

@Component({
    selector: "dm-detail-partial",
    templateUrl: "./details.partial.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports:[QuantityConvertorPipe,CommonModule]
})
export class DetailsPartialComponent {
    @Input() ingredient$: BehaviorSubject<IIngredient>;
}