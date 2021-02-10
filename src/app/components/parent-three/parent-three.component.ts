import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildThreeComponent } from '../child-three/child-three.component';

@Component({
  selector: 'app-parent-three',
  templateUrl: './parent-three.component.html',
  styleUrls: ['./parent-three.component.css']
})
export class ParentThreeComponent implements OnInit {

  @ViewChild(ChildThreeComponent) child: ChildThreeComponent = new ChildThreeComponent();
  // @ViewChild(ChildThreeComponent) child!: ChildThreeComponent;

  title:string ="Parent acccess child via @ViewChild"
  count:number = this.child.count
  constructor() { }

  ngOnInit(): void {
  }
  increment(){
    this.child.increment()
    console.log(this.count)
    console.log(this.child.count)

  }
  decrement(){
    this.child.decrement()
    console.log(this.count)
    console.log(this.child.count)
  }
}
