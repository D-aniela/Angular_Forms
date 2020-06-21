import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageErrorsService } from '../../services/message-errors.service';
import { Country } from '../../interfaces/country.interface';
import {
  RxwebValidators,
  ReactiveFormConfig,
} from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.css'],
})
export class TableFormComponent implements OnInit {
  public CountriesName: Array<string> = [];
  public formulario: FormGroup;
  public nombre: string = 'Paco Perez';

  constructor(
    private CountryService: CountryService,
    private errorService: MessageErrorsService
  ) {
    this.CountryService.getCountries().subscribe((country) =>
      this.CountriesName.push(country)
    );
  }

  ngOnInit(): void {
    this.createForm();
  }

  onBlurEvent(event: any) {
    console.log(event.target.value);
  }

  public createForm() {
    this.formulario = new FormGroup({
      firstName: new FormControl(null, [
        RxwebValidators.pattern({
          expression: { onlyAlpha: /^[a-zA-Z ]+$/ },
        }),
        // RxwebValidators.alpha(),
        // Reemplaza al pattern
        RxwebValidators.required(),
        // Validators.required,
        RxwebValidators.minLength({ value: 3 }),
        // Validators.minLength(3),
        // Validators.pattern(/^[a-zA-Z ]*$/),
      ]),
      lastName: new FormControl(null, [
        RxwebValidators.pattern({
          expression: { onlyAlpha: /^[a-zA-Z ]+$/ },
        }),
        RxwebValidators.required(),
        RxwebValidators.minLength({ value: 3 }),
      ]),
      phone: new FormControl(null, [
        RxwebValidators.pattern({
          expression: { onlyAlpha: /^([0-9])*$/ },
        }),
        RxwebValidators.required(),
        RxwebValidators.minLength({ value: 3 }),
      ]),
      email: new FormControl(null, [RxwebValidators.email()]),
      retype: new FormControl(null, [
        RxwebValidators.required(),
        RxwebValidators.minLength({ value: 3 }),
      ]),
      address: new FormControl(null, [
        RxwebValidators.required(),
        RxwebValidators.minLength({ value: 3 }),
      ]),
      city: new FormControl(null, [
        RxwebValidators.pattern({
          expression: { onlyAlpha: /^[a-zA-Z ]+$/ },
        }),
        RxwebValidators.required(),
        RxwebValidators.minLength({ value: 3 }),
      ]),
      zip: new FormControl(null, [
        RxwebValidators.pattern({
          expression: { onlyAlpha: /^([0-9])*$/ },
        }),
        RxwebValidators.required(),
        RxwebValidators.minLength({ value: 3 }),
      ]),
      country:new FormControl(null ,RxwebValidators.required()),

      addressType: new FormControl(null, RxwebValidators.requiredTrue())
    });
  }

  public MostrarFormulario() {
    console.clear();
    console.log(this.formulario);
  }

  public validarForm(control: string) {
    if (!this.formulario.controls[control].touched) return { error: undefined };
    // Regresa el objeto de los valores que tengo
    // let error: any = this.formulario.controls[control].errors;

    return this.errorService.errorMensaje(
      this.formulario.controls[control].errors
    );

    // if (error == null)
    //   return {
    //     error: false,
    //   };
    // // console.log(error);
    // if (error.required) {
    //   return {
    //     message: 'Es necesario este campo',
    //     error: true,
    //   };
    // } else if (error.onlyAlpha) {
    //   return {
    //     message: 'El campo cuenta con carácteres innecesarios',
    //     error: true,
    //   };
    // } else if (error.minLength) {
    //   return {
    //     message: 'Es necesario un mínimo de 3 caracteres',
    //     error: true,
    //   };
    // }
  }
}
