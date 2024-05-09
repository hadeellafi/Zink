import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class TitleService extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }
  updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    this.title.setTitle(`${title} - Dome`);
  }
  setTitle(title: string) {
    this.title.setTitle(`${title} - Dome`);
  }
}
