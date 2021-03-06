import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableFormComponent } from './components/table-form/table-form.component';

import { ReactiveFormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http";
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { UppercaseDirective } from './directives/uppercase.directive';
@NgModule({
  declarations: [
    AppComponent,
    TableFormComponent,
    UppercaseDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
