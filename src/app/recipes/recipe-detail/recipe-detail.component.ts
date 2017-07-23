import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() toggleManageRecipe = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  toggleManageRecipeDropdown() {

  }
}
