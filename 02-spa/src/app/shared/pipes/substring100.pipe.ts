import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substring100'
})
export class Substring100Pipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    value = value.substring(0,100).concat('...');
    
    return value;
  }

}
