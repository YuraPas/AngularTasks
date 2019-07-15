import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyTableComponent } from './my-table/my-table.component';
import { CalculatorComponent } from './calculator/calculator.component';


@NgModule({
   declarations: [
      AppComponent,
      MyTableComponent,
      CalculatorComponent
   ],
   imports: [
      BrowserModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
