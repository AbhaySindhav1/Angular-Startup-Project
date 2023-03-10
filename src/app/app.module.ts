import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReceipeComponent } from './receipe/receipe.component';
import { ReceipeListComponent } from './receipe/receipe-list/receipe-list.component';
import { ReceipeDetailsComponent } from './receipe/receipe-details/receipe-details.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ReceipeItemComponent } from './receipe/receipe-list/receipe-item/receipe-item.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceipeComponent,
    ReceipeListComponent,
    ReceipeDetailsComponent,
    ShoppingComponent,
    ReceipeItemComponent,
    ShoppingEditComponent,
 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
