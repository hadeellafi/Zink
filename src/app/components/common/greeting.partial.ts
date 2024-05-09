import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface IGreeting {
  morning: boolean;
  message: string;
}

@Component({
  selector: 'dm-greeting',
  templateUrl: './greeting.partial.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class MessageComponent implements OnInit {
  greeting: IGreeting = { morning: false, message: '' };
  currentTime!: Date;

  ngOnInit(): void {
    this.currentTime = new Date();
    this.greeting.morning = this.currentTime.getHours() < 12;
    this.greeting.message = this.greeting.morning
      ? 'Good morning'
      : 'Good afternoon';
  }
}
