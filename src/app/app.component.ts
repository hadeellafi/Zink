import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessageComponent } from './components/common/greeting.partial';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MessageComponent,],
  templateUrl: './app.component.html'
})
// TASK:02 create a child common component that displays the greeting message
export class AppComponent {
}



