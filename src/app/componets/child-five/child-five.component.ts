import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-five',
  templateUrl: './child-five.component.html',
  styleUrls: ['./child-five.component.css']
})
export class ChildFiveComponent implements OnInit , OnDestroy{

  constructor() {
    console.log("this is constructor - child")

   }

  ngOnInit(): void {
    console.log("this is ngOnit - child")
  }
ngOnDestroy(){
  console.log("this is ngOnDestroy - child")

}
}
