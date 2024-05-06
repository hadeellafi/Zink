import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessageComponent } from './components/common/greeting.partial';
import { NotificationComponent } from './components/common/notification.partial';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MessageComponent,NotificationComponent],
  templateUrl: './app.component.html'
})
// TASK:02 create a child common component that displays the greeting message
export class AppComponent {
  notificationMessage: string;

  receiveMessage($event: string) {
    this.notificationMessage = $event;
    console.log("from app",$event)
  }
 
}