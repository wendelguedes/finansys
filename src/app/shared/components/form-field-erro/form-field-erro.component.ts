import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-form-field-erro',
  template: `
    <p class="text-danger">
      {{errorMessage}}
    </p>
  `,
  styleUrls: ['./form-field-erro.component.css']
})
export class FormFieldErroComponent implements OnInit {

  @Input('form-control') formControl: FormControl;

  constructor() { }

  ngOnInit() {
  }

  public get errorMessage(): string | null {
    if( this.mustShowErrorMessage()){
      return this.getErrorMessage();
    }else{
      return null;
    }
  }

  private mustShowErrorMessage(): boolean{
    return this.formControl.invalid && this.formControl.touched;
  }

  private getErrorMessage(): string | null {
    if(  this.formControl.errors.required){
      return "Dado obrigatório";
    }
    else if(this.formControl.errors.minlength){
      const requiredLength = this.formControl.errors.minlength.requiredLength
      return `Deve ter no mínimo ${requiredLength} caracteres`;
    }
    else if(this.formControl.errors.maxlength){
      const requiredLength = this.formControl.errors.maxlength.requiredLength
      return `Deve ter no mínimo ${requiredLength} caracteres`;
    }
    else if(this.formControl.errors.email){
      return "Formato de e-mail inválido";
    }
  }

}
