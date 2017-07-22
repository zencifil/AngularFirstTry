import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test', 'test test test test', 'https://pbs.twimg.com/profile_images/539920029/svs_400x400.jpg'),
    new Recipe('Test', 'test test test test', 'https://pbs.twimg.com/profile_images/539920029/svs_400x400.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
