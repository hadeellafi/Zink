import { IIngredient, Ingredient } from './ingredients.model';

export interface IBit {
  id: string;
  name?: string; // optional params make life easier
  ingredients?: IIngredient[];
  // TASK:04: turn this into an enum
  taste?: EnumTaste;
}

export enum EnumTaste {
  SWEET = 'sweet',
  SOUR = 'sour',
  BITTER = 'bitter',
  SALTY = 'salty',
  UMAMI = 'umami',
  // add default
  NOTASTE = 'tasteless',
}
// TASK:04: do not use the returned data as is, create a mapper here.
export class Bit {
  // start like this. get data from api, return IBit
  public static NewInstance(data: any): IBit {
    return {
      id: data.id,
      name: data.name,
      ingredients: data.ingredients
        ? data.ingredients.map(
            (ingredientData: any) =>
              (ingredientData = Ingredient.NewInstance(ingredientData))
          )
        : [],
      taste: Bit.MapTaste(data.taste),
    };
  }

  public static NewInstances(data: any): IBit[] {
    return data.map((bit) => Bit.NewInstance(bit));
  }

  private static MapTaste(taste: string): EnumTaste {
    // if no taste, return default (notaste
    if (!taste) return EnumTaste.NOTASTE;
    // for every value from database, map it to EnumTaste
    switch (taste.toUpperCase()) {
      case 'SWEET':
        return EnumTaste.SWEET;
      case 'SOUR':
        return EnumTaste.SOUR;
      case 'BITTER':
        return EnumTaste.BITTER;
      case 'SALTY':
        return EnumTaste.SALTY;
      case 'UMAMI':
        return EnumTaste.UMAMI;

      default:
        return EnumTaste.NOTASTE; // nave a defaut
    }
  }
}

// PS. you can use `namespace` instead of class.
