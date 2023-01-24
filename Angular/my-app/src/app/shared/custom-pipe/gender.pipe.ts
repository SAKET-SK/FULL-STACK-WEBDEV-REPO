import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: unknown, genderValue: string): unknown {
    if(genderValue.toLowerCase() == "male"){
      return "Mr. " + value;
    }
    else{
      return "Ms. " + value;
    }
  }
}
