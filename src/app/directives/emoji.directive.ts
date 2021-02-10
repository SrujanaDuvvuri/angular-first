import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appEmoji]'
})
export class EmojiDirective implements OnInit{


  @Input('appEmoji') emoji:string =""
  @Input('message') emoji2:string =""
  @Input('message2') emoji3:string =""

  constructor(private el:ElementRef) { 
  // console.log(this.el.nativeElement);
  this.el.nativeElement.style.color = "blue"

}
ngOnInit(){
  // this.el.nativeElement.textContent = this.el.nativeElement.textContent + 'emoji'
    this.el.nativeElement.textContent = this.el.nativeElement.textContent + this.emoji

    this.el.nativeElement.textContent+= this.emoji + this.emoji2 + this.emoji3
    this.el.nativeElement.textContent+= ' 😜'
}
}
