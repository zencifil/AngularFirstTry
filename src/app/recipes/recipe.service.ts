import { Recipe } from "app/recipes/recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Test', 'test test test test', 'https://pbs.twimg.com/profile_images/539920029/svs_400x400.jpg'),
        new Recipe('Testere', 'testere test test test', 'https://pbs.twimg.com/profile_images/539920029/svs_400x400.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}