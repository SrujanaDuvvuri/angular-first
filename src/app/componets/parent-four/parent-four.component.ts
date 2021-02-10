import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-parent-four',
  templateUrl: './parent-four.component.html',
  styleUrls: ['./parent-four.component.css']
})
export class ParentFourComponent implements OnInit {

  message: string = ""
  name:string=""
  customer: Customer= new Customer();
  code:number=0

  constructor() { }

  ngOnInit(): void {
  }
  updateCustomer(){
    this.customer = new Customer;
    this.customer.code=this.code;
    this.customer.name=this.name;
  }

}
