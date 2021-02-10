import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-five',
  templateUrl: './parent-five.component.html',
  styleUrls: ['./parent-five.component.css']
})
export class ParentFiveComponent implements OnInit {

  displayChild = true;

  constructor() {
    console.log("this is constructor - parent")

   }

  ngOnInit(): void {
    console.log("this is ngOnit - parent")
  }
ngOnDestroy(){
  console.log("this is ngOnDestroy - parent")

}
toggle(){
  this.displayChild = !this.displayChild;
}

}
