import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessageComponent } from './components/common/greeting.partial';
import { ToastPartial } from './lib/toast/toast.partial';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MessageComponent,ToastPartial],
  templateUrl: './app.component.html'
})
// TASK:02 create a child common component that displays the greeting message
export class AppComponent {
 
}