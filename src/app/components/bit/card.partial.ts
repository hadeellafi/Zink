import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { IBit } from "../../models/bit.model";
import { RouterModule } from "@angular/router";

@Component({
    templateUrl: "./card.partial.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "dm-bit-card",
    standalone: true,
    imports: [RouterModule]
})
export class BitCardComponent {
    @Input() bit: IBit;
    
}