import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers=[
    {id:1, name:"srujana", email:"sr.k"},
    {id:2, name:"satya", email:"sa.k"},
    {id:3, name:"addu", email:"ad.k"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
