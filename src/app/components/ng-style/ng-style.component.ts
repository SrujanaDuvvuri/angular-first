import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  textColor: String = 'red'
  font:string ='30px'
  value = 6;

  status: string = 'errors'

  anoValue :number;
  constructor() { 
    this.anoValue = (this.value ==5) ? 10 : 20
    console.log(this.anoValue)
  }

  ngOnInit(): void {
  }

}
