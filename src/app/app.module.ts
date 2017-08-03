import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from "app/app-routing.module";
import { RecipeService } from "app/recipes/recipe.service";
import { DataStorageService } from "app/shared/data-storage.service";
import { AuthService } from "app/auth/auth.service";
import { AuthGuard } from "app/auth/auth-guard.service";
import { SharedModule } from "app/shared/shared.module";
import { ShoppingListModule } from "app/shopping-list/shopping-list.module";
import { AuthModule } from "app/auth/auth.module";
import { CoreModule } from "app/core/core.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ShoppingListModule,
    SharedModule,
    AuthModule,
    CoreModule
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
