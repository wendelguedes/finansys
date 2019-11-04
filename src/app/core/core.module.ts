import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataBase } from "../in-memory-database";
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: 
  [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataBase), // Usado para interceptar as requisições e usar o In-Memory-Database
    RouterModule
  ],
  exports: [
    //Shared modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    //Shared Components
    NavbarComponent
  ]
})
export class CoreModule { }
