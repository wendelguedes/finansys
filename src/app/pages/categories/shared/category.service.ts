import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import { map, catchError, flatMap } from "rxjs/operators";

import { Category } from "./category.model";
import { CategoryListComponent } from '../category-list/category-list.component';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiPath: string = "api/categories"

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<Category>{
    const url = `${this.apiPath}/${id}`;

    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategory)
    )
  }

  create(category: Category): Observable<Category>{
    return this.http.post(this.apiPath, category).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategory)
    )
  }

  update(category: Category): Observable<Category>{
    const url = `${this.apiPath}/${category.id}`;
    return this.http.put(url, category).pipe(
      catchError(this.handleError),
      map(() => category)
    )
  }

  delete(id: number): Observable<any>{
    const url = `${this.apiPath}/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(() => null)
    )
  }

  getAll(): Observable<Category[]> {
    return this.http.get(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategories)
    )
  }

  // Private methots

  private handleError(error: any): Observable<any>{
    console.log('Erro na requesição => ', error);
    return throwError(error);
  }

  private jsonDataToCategory(jsonData: any): Category {
    return jsonData as Category;
  }

  private jsonDataToCategories(jsonData: any[]): Category[]{
    const categories: Category[] = [];
    jsonData.forEach(element => categories.push(element as Category));
    return categories;
  }
}
