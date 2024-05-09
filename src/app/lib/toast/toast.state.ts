import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { IToast } from './toast.model';

// TASK:05: add timeout property set by default to 5 seconds, hide toast after timer

@Injectable({ providedIn: 'root' })
export class ToastState {
  private stateElement: BehaviorSubject<IToast> = new BehaviorSubject(null);
  state$: Observable<IToast> = this.stateElement.asObservable();

  updateState(state: IToast) {
    this.stateElement.next(state);
    this.timeout();
  }

  timeout() {
    timer(5000).subscribe(() => {
      this.stateElement.next(null);
    });
  }
}
