import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    templateUrl:"./home.component.html",
    standalone:true,
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomeComponent{

}