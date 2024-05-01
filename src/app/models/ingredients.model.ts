
export interface IIngredient {
    id: string;
    name: string;
    quantity: number;
};
export class Ingredient {

    public static NewInstance(data: any): IIngredient {
        return {
            id: data.id,
            name: data.name ,
            quantity: data.quantity 
        };
    }
}