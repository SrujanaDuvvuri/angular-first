import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {


  cssString:string = "red size20"
  cssArray:string[]= ['red', 'size20']
  cssObject:Object = {'red':true, 'size20':true}
  constructor() { }

  ngOnInit(): void {
  }

}
