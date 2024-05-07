import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IPiece } from "../models/piece.model";

@Injectable()
export class PieceState {

    // create state element
    private stateElement: BehaviorSubject<IPiece> = new BehaviorSubject(null);
    state$: Observable<IPiece> = this.stateElement.asObservable();

    setState(piece: IPiece) {
        this.stateElement.next(piece);
        return this.state$;

    }
    // update state
    updateState(state: IPiece): Observable<IPiece> {
        // get current, then extend
        this.stateElement.next({ ...this.stateElement.getValue(), ...state });
        // then return the state to continue
        return this.state$;
    }

}

