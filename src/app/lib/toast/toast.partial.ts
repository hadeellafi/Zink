import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { IToast } from './toast.model';
import { ToastState } from './toast.state';

// TASK:05: refactor by putting toast in its own lib/toast folder
@Component({
  selector: 'dm-toast',
  template: `
    <div
      class="toast-wrapper"
      [class.show]="toast.visible"
      *ngIf="toast$ | async as toast"
    >
      {{ toast?.message }}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // most toast styles are specific to toast, so we embed them
  styleUrl: './toast.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
})
export class ToastPartial implements OnInit {
  // this component needs a state that can be globally updated.
  toast$: Observable<IToast>;

  // inject toast service
  constructor(private toast: ToastState) {
    //
  }
  ngOnInit(): void {
    // assign message to current state
    this.toast$ = this.toast.state$;
  }
}
