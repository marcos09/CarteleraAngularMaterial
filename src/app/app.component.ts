import { Component } from '@angular/core';
import {CarteleraHttpService} from './services/cartelera-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CarteleraHttpService]
})
export class AppComponent {
  public title = 'application';
  constructor(private _carteleraService: CarteleraHttpService){
  	this.title = this._carteleraService.getTexto();
  }
}
