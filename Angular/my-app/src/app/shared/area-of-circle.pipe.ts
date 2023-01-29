import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'areaOfCircle'
})
export class AreaOfCirclePipe implements PipeTransform {

  transform(radius: number): unknown {
    return "Radius is " + radius + " and its area is " + Math.PI * radius * radius;
  }

}
