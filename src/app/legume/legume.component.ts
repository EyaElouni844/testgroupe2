import { Component, OnInit, Input } from '@angular/core';
import { Legume } from '../Legume';

@Component({
  selector: 'app-legume',
  templateUrl: './legume.component.html',
  styleUrls: ['./legume.component.css']
})
export class LegumeComponent implements OnInit {
  color:string;
  @Input('leg') msgParent:Legume;
  getColor(){
    this.color="khaki;"
  }
n:number;
  calculer(){
return this.n;
  }
  constructor() { }

  ngOnInit() {
  }

}
