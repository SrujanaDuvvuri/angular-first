import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.css']
})
export class ParentOneComponent implements OnInit {

  title:string = "Child to parent emit and listerners"
  counter:number=1;
  constructor() { }

  ngOnInit(): void {
  }
//   countChangedhandler(count:number){
//   this.counter = count;
//   console.log(count)
// }
countChangedhandler(event:any){
  // this.counter = count;
  console.log(event)
}
}
