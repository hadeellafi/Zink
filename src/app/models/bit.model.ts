import { IIngredient } from "./ingredients.model";

 export interface IBit {
    id: string;
    name?: string; // optional params make life easier
    ingredients?: IIngredient[];
    // TASK:04: turn this into an enum
    taste?: string;
  }
  
  
  // TASK:04: do not use the returned data as is, create a mapper here.
  export class Bit {
  
    // start like this. get data from api, return IBit
    // public static NewInstance(data: any): IBit {
    //   return {
    //     id: data.id
    //   }
    // }
  }
  
  // PS. you can use `namespace` instead of class.
  