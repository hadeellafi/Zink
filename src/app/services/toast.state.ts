import { Injectable } from "@angular/core";
import { IToast } from "../models/toast.model";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ToastState {
    private stateElement: BehaviorSubject<IToast> = new BehaviorSubject(null);
    state$: Observable<IToast> = this.stateElement.asObservable();

    updateState(state: IToast) {
        this.stateElement.next(state);
    }
}