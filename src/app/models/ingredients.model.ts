export interface IIngredient {
  id: string;
  name: string;
  quantity: number;
}
export class Ingredient {
  public static NewInstance(data: any): IIngredient {
    return {
      id: data.id,
      name: data.name,
      quantity: data.quantity,
    };
  }
  public static NewInstances(data: any): IIngredient[] {
    return data.map((item) => Ingredient.NewInstance(item));
  }
}
