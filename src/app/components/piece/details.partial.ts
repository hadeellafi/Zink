import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ISegment } from "../../models/segment.model";

@Component({
    selector: "dm-piece-details",
    templateUrl: "./details.partial.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class DetailsPartialComponent {
    @Input() segment: ISegment
}