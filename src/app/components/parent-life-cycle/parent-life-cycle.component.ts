import { Component, OnInit , OnChanges, Input, ViewChild} from '@angular/core';
import { ChildLifeCycleComponent } from '../child-life-cycle/child-life-cycle.component';

@Component({
  selector: 'app-parent-life-cycle',
  templateUrl: './parent-life-cycle.component.html',
  styleUrls: ['./parent-life-cycle.component.css']
})
export class ParentLifeCycleComponent implements OnInit,OnChanges {

  @Input() message:string =''
  @Input() sample:String = ''
  @Input() data:string=''
  @ViewChild(ChildLifeCycleComponent)
  child!: ChildLifeCycleComponent;

  constructor() { }

  ngOnInit(): void {
    console.log('onit method of parent compoent')
console.log(this.child)
  }
  ngOnChanges(){
    console.log('ngOnchanges hook of parent class')
  }

}
