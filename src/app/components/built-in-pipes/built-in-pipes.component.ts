import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.css']
})
export class BuiltInPipesComponent implements OnInit {

  title: string = "Date pipe example"
  toDate: Date = new Date(); //gives current date
  
  titleCase : string = "Uppercase and lowercase pipes"
  message : string = "Welcome to Angular"

  titleSlice : string = "Slice Pipe"
  messageSlice : string = "Slicing pipe demo and the other part will be sliced"

  titleDecimal:string = "Decimal pipe"
  value :  number = 9542.2665533
  pi: number = 3.14845845848589589

  titleCurrency: String =  "currency pipe"
  cur : number = 180.123456789

  titlePercent : String = "Percentage pipe"
  per : number = 0.75289665
  per1: number = 123456

  constructor() { }

  ngOnInit(): void {
  }

}
