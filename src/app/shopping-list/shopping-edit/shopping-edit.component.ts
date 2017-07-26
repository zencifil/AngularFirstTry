import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameElementRef: ElementRef;
  @ViewChild('amountInput') amountElementRef: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameElementRef.nativeElement.value;
    const ingAmount = this.amountElementRef.nativeElement.value;
    const newIng = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIng);
  }
}
