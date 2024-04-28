import { ChangeDetectionStrategy, Component, Input, input } from "@angular/core";
import { IBit } from "../../models/bit.model";

@Component({
    templateUrl:"./card.partial.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector:"dm-bit-card",
    standalone: true
})
export class BitCardComponent{
    @Input() bit: IBit;

}