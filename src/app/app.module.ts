import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { LegumeComponent } from './legume/legume.component';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    LegumeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
