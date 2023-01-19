import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output()
  searchEvent = new EventEmitter<string>();

  constructor(private headerService: HeaderService) { }

  search(searchValue: string): void {
    console.log(`SOLICITUD DE BÚSQUEDA --> seachValue: ${searchValue}`);
    this.headerService.search(searchValue);
  }

}