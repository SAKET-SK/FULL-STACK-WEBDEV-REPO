import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements AfterViewInit {

  constructor(private ref: ElementRef) { }
  ngAfterViewInit() {
    this.ref.nativeElement.style.color = "red";
  }

  changeColor(newColor: any){
    this.ref.nativeElement.style.color = newColor;
  }

}
