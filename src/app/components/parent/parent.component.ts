import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  title = "component communication"
  counter = 5;
  message ="Welcome World!!"
  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.counter++
  }
  decrement(){
    this.counter--
  }
}
