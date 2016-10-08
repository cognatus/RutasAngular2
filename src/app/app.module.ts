import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Ruta1Component } from './ruta1/ruta1.component';
import { Ruta2Component } from './ruta2/ruta2.component';
import { APP_ROUTES } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    Ruta1Component,
    Ruta2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
