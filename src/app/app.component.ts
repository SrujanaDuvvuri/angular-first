import { Component } from '@angular/core';

@Component({
  selector: '.app-root',
  // selector: '[app="app-root"]',
  templateUrl: './app.component.html',
  // template : `
  //   <div class="container">
  //   <h1>This is inline style</h1>
  //   <h1> {{fullName}} </h1>
  //   </div>
  // `,
  styleUrls: ['./app.component.css']
//   styles :[`
//       h1{
//         color: red
//       }

// `]
})
export class AppComponent {
  title = 'Ms.';
  firstName = 'Suji';
  lastName = 'Duvvuri';
  fullName = 'tim cook';
  text="welcome to Angular";
  isDisabled =false;
  url = "https://angular.io/cli";
  target="_blank"
  counter=0;
  email="srere"
getName(){
  console.log(this.fullName)
  // return this.fullName;
  this.fullName = 'Srujana'
  console.log(this.fullName)
}
clickMe(){
  this.counter++;
}
getEmail(){
  this.email="Srujaan.come"
// let txtEmail=document.getElementById('email')
// console.log(txtEmail)
}
constructor(){
console.log(this.lastName)
}
}