import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: number): unknown {
    return "Value is " + value + " and sqaure is " + value * value;
  }

}
