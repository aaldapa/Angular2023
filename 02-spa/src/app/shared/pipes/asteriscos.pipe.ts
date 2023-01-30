import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asteriscos'
})
export class AsteriscosPipe implements PipeTransform {
  transform(texto: string, activar: boolean=false): string {
    


    if (activar) {
      //return Array.from(texto).map((caracter) => '*').join('');
      return '*'.repeat(texto.length);
    }

    return texto;
  }
}
