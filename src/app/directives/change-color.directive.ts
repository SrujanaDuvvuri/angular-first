import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {


  constructor(private el:ElementRef) { 
    console.log(this.el.nativeElement);
    this.el.nativeElement.style.color = "white"
    this.el.nativeElement.style.backgroundColor = "green"
  }

}
