import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IIngredient, Ingredient } from '../models/ingredients.model';
import { Config } from '../utils/config';


@Injectable({ providedIn: 'root' })
export class IngredientService {


    private _listUrl = Config.Api.ingredient.list;
    private _detailUrl = Config.Api.ingredient.details;
    private _createUrl = Config.Api.ingredient.create;
    private _updateUrl = Config.Api.ingredient.update;
    private _deleteUrl = Config.Api.ingredient.delete;


    constructor(private http: HttpClient) {

    }


    GetIngredients(bitId: string): Observable<IIngredient[]> {
        return this.http.get(this._listUrl.replace(':id', bitId)).pipe(

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

    DeleteIngredient(bitId: string, ingredient: IIngredient): Observable<boolean> {
        const url = this._deleteUrl.replace(':id', bitId).replace(':iid', ingredient.id);
        return this.http.delete(url).pipe(
            map((response: any) => response)
        );
    }


    // TASK:05: seperate ingredients into its own service with its own REST methods
    // also reflect that on model and components, create a new folder for ingredients
}
