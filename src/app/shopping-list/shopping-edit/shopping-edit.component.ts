import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

import { LoggingService } from '../../shared/logging.service';
import { Ingredient } from "app/shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  providers: [ LoggingService ]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameElementRef: ElementRef;
  @ViewChild('amountInput') amountElementRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private logService: LoggingService) { }

  ngOnInit() {
  }

  onAddItem() {
    this.ingredientAdded.emit(
      new Ingredient(this.nameElementRef.nativeElement.value, 
                     this.amountElementRef.nativeElement.value));
    
    this.logService.logConsole('new ingredient is added: ' + this.nameElementRef.nativeElement.value);
  }
}
