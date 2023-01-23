import { EventEmitter, Injectable, Output } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  //Emisor
  @Output()
  searchEvent = new EventEmitter<string>();

  /**
   * Emite evento de busqueda proporciando a los subscritores el parametro de entrada
   * @param searchValue 
   */
  search(searchValue: string): void {
    console.log(`EMITIR EVENTO BÚSQUEDA--> searchValue: ${searchValue}`);
    this.searchEvent.emit(searchValue);
  }

  constructor() { }
}
