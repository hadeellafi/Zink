import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IIngredient, Ingredient } from '../models/ingredients.model';


@Injectable({ providedIn: 'root' })
export class IngredientService {


    private _listUrl = '';
    private _detailUrl = '';
    private _createUrl = '';
    private _updateUrl = '';
    private _deleteUrl = '';


    constructor(private http: HttpClient) {

    }


    GetIngredients(bitId: string): Observable<IIngredient[]> {
        return this.http.get(this._listUrl).pipe(

            map((response: any) => Ingredient.NewInstances(response))
        );
    }

    GetIngredient(id: string): Observable<IIngredient> {
        return this.http.get(this._detailUrl.replace(':id', id)).pipe(
            map((response: any) => Ingredient.NewInstance(response))
        );
    }

    CreateIngredient(ingredient: IIngredient): Observable<IIngredient> {
        return this.http.post(this._createUrl, ingredient).pipe(
            map((response: any) => Ingredient.NewInstance(response))
        );
    }

    UpdateIngredient(ingredient: IIngredient): Observable<IIngredient> {
        return this.http.put(this._updateUrl.replace(':id', ingredient.id), ingredient).pipe(
            map((response: any) => Ingredient.NewInstance(response))
        );
    }

    DeleteIngredient(bit: IIngredient): Observable<boolean> {
        return this.http.delete(this._deleteUrl.replace(':id', bit.id)).pipe(
            map((response: any) => response)
        );
    }

    // TASK:05: seperate ingredients into its own service with its own REST methods
    // also reflect that on model and components, create a new folder for ingredients
}
