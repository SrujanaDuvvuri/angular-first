import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.css']
})
export class ChildThreeComponent implements OnInit {
count:number =10;
  constructor() { }

  ngOnInit(): void {
  }
  increment(){
    this.count++
  }
  decrement(){
    this.count--
  }

}
