import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
    templateUrl: "./notification.partial.html",
    selector: "dm-notification",
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationComponent {
    @Input() message: string;
}