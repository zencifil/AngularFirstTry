import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipeService } from "app/recipes/recipe.service";
import { Recipe } from "app/recipes/recipe.model";
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
    url = 'https://recipebook-d9893.firebaseio.com/';

    constructor(private http: Http, private recipeService: RecipeService) {}

    storeRecipes() {
        return this.http.put(this.url + 'recipes.json', this.recipeService.getRecipes());
    }

    getRecipes() {
        this.http.get(this.url + 'recipes.json')
            .map(
                (response: Response) => {
                    const recipes: Recipe[] = response.json();
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            );
    }
}