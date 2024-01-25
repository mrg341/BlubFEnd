import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss'],
})
export class ResponseComponent  implements OnInit {

  @Input() question: any;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  redirect(){
    this.onClick.emit(this.question)
  }

  /*sendRes(item){
    const url = ['tab2/chats', item?.id];
      console.log('Navigating to:', url);
      this.router.navigate(url);
  }*/

}
