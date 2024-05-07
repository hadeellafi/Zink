import { BehaviorSubject, Observable } from "rxjs";
import { IBit } from "../models/bit.model";

export class BitListState {
    private stateElements: BehaviorSubject<IBit[]> = new BehaviorSubject(null);
    stateList$: Observable<IBit[]> = this.stateElements.asObservable();

    SetList(items: IBit[]): Observable<IBit[]> {
        this.stateElements.next(items);
        return this.stateList$;
    }
    get currentList(): IBit[] {
        return this.stateElements.getValue();
    }
    addItem(item: IBit) {
        this.stateElements.next([...this.currentList, item])
    }
    editItem(item: IBit) {
        const current = [...this.currentList];
        const index = current.findIndex(n => n.id === item.id);
        if (index > -1) {
            current[index] = { ...item };
            this.stateElements.next(current);
        }

    }
    deleteItem(item: IBit) {
        this.stateElements.next(this.currentList.filter(n => n.id !== item.id));
    }
}