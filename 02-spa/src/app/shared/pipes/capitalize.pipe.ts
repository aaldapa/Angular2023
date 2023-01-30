import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  /**
   *
   * @param text
   * @param args palabras que no se quieren capitalizar
   * @returns
   */
  transform(text: string, exceptions: boolean = false, exceptionsWord: string[] = []): string {
    let valueTransform = '';
    console.log(text);

    let textArr = text.split(' ').map((word) => {
      return word[0].toUpperCase().concat(word.substring(1).toLowerCase());
    });

    if (exceptions && exceptionsWord.length > 0) {
      textArr = textArr.map((word) => {
        let isExceptWord: boolean =
          exceptionsWord.some((exceptWord) => {
            // console.log(`${exceptWord.toUpperCase()} == ${word.toUpperCase()}`)
            return exceptWord.toUpperCase() == word.toUpperCase();
          });
        if (isExceptWord) {
          return word.toLowerCase();
        }
        return word;
      });
    }

    console.log(textArr);
    return textArr.join(' ');
  }
}
