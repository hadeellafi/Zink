import { INgredient } from "./ingredients.model";

export interface IBit {
    id: string;
    name: string;
    taste?: string
    ingredients?: INgredient[]
}