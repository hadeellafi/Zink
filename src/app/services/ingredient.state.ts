import { BehaviorSubject, Observable } from "rxjs";
import { } from "../models/bit.model";
import { IIngredient } from "../models/ingredients.model";
import { Injectable } from "@angular/core";

@Injectable()
export class IngredientState {
    private stateElements: BehaviorSubject<IIngredient[]> = new BehaviorSubject(null);
    stateList$: Observable<IIngredient[]> = this.stateElements.asObservable();

    SetList(items: IIngredient[]): Observable<IIngredient[]> {
        this.stateElements.next(items);
        return this.stateList$;
    }
    get currentList(): IIngredient[] {
        return this.stateElements.getValue();
    }
    addItem(item: IIngredient) {
        this.stateElements.next([...this.currentList, item])
    }
    editItem(item: IIngredient) {
        const current = [...this.currentList];
        const index = current.findIndex(n => n.id === item.id);
        if (index > -1) {
            current[index] = { ...item };
            this.stateElements.next(current);
        }

    }
    deleteItem(item: IIngredient) {
        this.stateElements.next(this.currentList.filter(n => n.id !== item.id));
    }
}