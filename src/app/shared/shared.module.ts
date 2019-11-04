import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { FormFieldErroComponent } from './components/form-field-erro/form-field-erro.component';


@NgModule({
  declarations: [
    BreadCrumbComponent,
    PageHeaderComponent,
    FormFieldErroComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    //Shared modules
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    //Shared components
    BreadCrumbComponent,
    PageHeaderComponent,
    FormFieldErroComponent
  ]
})
export class SharedModule { }
