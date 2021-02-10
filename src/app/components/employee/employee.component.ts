import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeList =[
{
  name: 'srujana',
  email:'sdfsf.com',
  skills:[{
    skill: 'Java',
    exp : '5 years'
  }]
},
{
  name: 'suji',
  email:'dfsd.com',
  skills:[{
    skill: 'sdfsd',
    exp : '5 years'
  }]
},{
  name: 'dfsdfsdf',
  email:'sdfsf.com',
  skills:[{
    skill: 'Jdfsava',
    exp : '5 years'
  }]
}

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
