import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUiRipple]'
})
export class UiRippleDirective {

  constructor(el: ElementRef) {
    el.nativeElement.className = "ripple";
   }

}
