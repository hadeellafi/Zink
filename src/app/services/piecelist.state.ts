import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IPiece } from "../models/piece.model";

@Injectable()
export class PieceListState {

  
    private stateElements: BehaviorSubject<IPiece[]> = new BehaviorSubject([]);
    stateList$: Observable<IPiece[]> = this.stateElements.asObservable();


    SetList(items: IPiece[]): Observable<IPiece[]> {
        this.stateElements.next(items);
        return this.stateList$;
    }
    get currentList(): IPiece[] {
        return this.stateElements.getValue();
    }
    addItem(item: IPiece) {
        this.stateElements.next([...this.currentList, item])
    }
    editItem(item: IPiece) {
        const current = [...this.currentList];
        const index = current.findIndex(n => n.id === item.id);
        if (index > -1) {
            current[index] = { ...item };
            this.stateElements.next(current);
        }

    }
    deleteItem(item: IPiece) {
        this.stateElements.next(this.currentList.filter(n => n.id !== item.id));
    }
}

