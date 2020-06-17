import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageErrorsService {
  constructor() {}

  public errorMensaje(errorRecibido: Object) {
    let message: string = '';
    if (errorRecibido == null) {
      return {
        error: false,
      };
    }

    switch (true) {
      case errorRecibido.hasOwnProperty('required'):
        message = 'Es necesario este campo';
        break;
      case errorRecibido.hasOwnProperty('onlyAlpha'):
        message = 'Contiene caracteres innecesarios';
        break;
      case errorRecibido.hasOwnProperty('minLength'):
        message = 'Es necesario un mínimo de 3 caracteres';
        break;
      case errorRecibido.hasOwnProperty('email'):
        message = 'Ingrese un correo válido';
        break;
      default:
        return {
          error: false,
        };
    }
    return {
      message,
      error: true,
    };
  }
}
