import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, switchMap, mergeMap } from 'rxjs/operators';
import { Country } from '../interfaces/country.interface';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private urlCountryApi = `https://restcountries.eu/rest/v2/all`;

  constructor(private http: HttpClient) {}

  public getCountries() {
    return this.http
      .get(this.urlCountryApi)
      .pipe(
        mergeMap((countries: Country[]) =>
          from(countries).pipe(map((country) => country.name))
        )
      );
  }
}

// Es lo mismo que lo que esta dentro de getCountries
// map((country: Country) => {
//   let nombrePais = country.name;
//   return { nombrePais: nombrePais };
// });
