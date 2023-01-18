import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  searchRequestParam: string = '';

  @Output()
  searchParam = new EventEmitter<string>();

  printSearchParam(): void {
    console.log(this.searchRequestParam);
  }

}
