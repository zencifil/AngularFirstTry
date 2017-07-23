import { Ingredient } from "../shared/ingredient.model";

export class IngredientsService {
    ingredients: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('tomato', 10)
    ];

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }
}