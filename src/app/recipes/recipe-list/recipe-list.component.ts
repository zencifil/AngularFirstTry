import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

import { Recipe } from '../recipe.model';
import { RecipeService } from "app/recipes/recipe.service";
import { AuthService } from "app/auth/auth.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipeService: RecipeService, 
    private authService: AuthService,
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipeChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/signin']);
    }
    else {
      this.router.navigate(['new'], { relativeTo: this.route });
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
