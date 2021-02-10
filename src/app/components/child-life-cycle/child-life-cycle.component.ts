import { Component, OnInit , Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-child-life-cycle',
  templateUrl: './child-life-cycle.component.html',
  styleUrls: ['./child-life-cycle.component.css']
})
export class ChildLifeCycleComponent implements OnInit, OnChanges {

  @Input() message:string = '';
  constructor() { }

  ngOnInit(): void {
    console.log('onit method of child compoent')
  }
  ngOnChanges(){
    console.log('ngOnchanges hook of childd class')
  }

}
