import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
    selector:'greetingMsg',
    templateUrl:'./greetingMsg.partial.html',
    standalone:true,
    imports:[CommonModule],
    
})

export class MessageComponent implements OnInit {
    currentTime!: Date;
  isMorning!: boolean;
  ngOnInit(): void {
    this.currentTime = new Date();
    this.isMorning = this.currentTime.getHours() < 12

  }
}