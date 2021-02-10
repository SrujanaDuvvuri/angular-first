import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-child-four',
  templateUrl: './child-four.component.html',
  styleUrls: ['./child-four.component.css']
})
export class ChildFourComponent implements OnInit,OnChanges {

  @Input() message:string=""
  @Input() customer!: Customer;
  changeLog:String[]=[];
  constructor() { }
  
  oldCustomer:Customer = new Customer()
  DoCheckCount =0;


  ngOnInit(): void {
    console.log("Ng on it")
    this.oldCustomer = Object.assign({}, this.customer);

  }
  ngOnChanges(changes : SimpleChanges){
      console.log('onChange')
      console.log(JSON.stringify(changes))
      for (const propName in changes){
        const change=changes[propName]
        const to = JSON.stringify(change.currentValue)
        const from = JSON.stringify(change.previousValue)
        const changeLog = `${propName} : changed from ${from} to ${to}`
        this.changeLog.push(changeLog)
      }
  }
  // ngDoCheck(){
  //   console.log('ngDoCheck is fired')
  //   this.DoCheckCount++
  //   if(this.oldCustomer.name !== this.customer.name 
  //   || this.oldCustomer.code !== this.customer.code ){
  //     const to = JSON.stringify(this.customer)
  //     const from = JSON.stringify(this.oldCustomer)
  //     const changeLog = `Docheck.customer : changed from ${from} to ${to}`
  //     this.changeLog.push(changeLog)
  //     this.oldCustomer =Object.assign({},this.customer)
  //   }
  // }
}
