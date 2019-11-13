import { Component, OnInit } from '@angular/core';
import { Legume } from '../Legume';
@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
 titre:string="légumes du 12/Novembre /2019";

 tabLegumes =[ {image: '../assets/tomate.jpg',nom:'tomate', prix: 2.8, frais:false},
 {image: '../assets/radis.jpg',nom:'radis', prix: 1.8, frais:true},
 {image: '../assets/carotte.jpg',nom:'tomate', prix: 3.8, frais:false},];
  constructor() { }
  onKeyUp(event:KeyboardEvent)
  {
  return((<HTMLInputElement>event.target).value);
  }
  ngOnInit() {
  }

}
