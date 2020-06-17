import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appUppercase]',
})
export class UppercaseDirective {
  constructor(private el: ElementRef, private render: Renderer2) {}

  @HostListener('blur') onInputOut() {
    let string = this.el.nativeElement.value;
    let arrayOfStrings = string.charAt(0).toUpperCase() + string.slice(1);
    console.log(arrayOfStrings);
    this.el.nativeElement.value = arrayOfStrings;
  }
}
