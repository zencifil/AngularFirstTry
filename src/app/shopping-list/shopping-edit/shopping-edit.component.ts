import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

import { Ingredient } from "app/shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameElementRef: ElementRef;
  @ViewChild('amountInput') amountElementRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    this.ingredientAdded.emit(
      new Ingredient(this.nameElementRef.nativeElement.value, 
                     this.amountElementRef.nativeElement.value));
    
  }
}
