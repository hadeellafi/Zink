import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  currentTime!: Date;
  isMorning!: boolean;
  ngOnInit(): void {
    this.currentTime = new Date();
    this.isMorning = this.currentTime.getHours() < 12

  }
  
}



