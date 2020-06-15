import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.css'],
})
export class TableFormComponent implements OnInit {
  public CountriesName: Array<string> = [];
  public formulario: FormGroup;

  constructor(private CountryService: CountryService) {
    this.CountryService.getCountries().subscribe((country) =>
      this.CountriesName.push(country)
    );
  }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm() {
    this.formulario = new FormGroup({
      firstName: new FormControl(""),
    });
  }
}
