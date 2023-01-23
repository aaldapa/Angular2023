import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';

  searchParam!:string;

  // relauchSearch(searchParam:string){
  //   console.log(`CAPTURADO EVENTO --> párametro de búsqueda : ${searchParam}`);
  //   this.searchParam = searchParam;
  // }

}
