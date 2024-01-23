import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss'],
})
export class ResponseComponent  implements OnInit {

  @Input() item: any;
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  
  name: string = '';
  messages: any = [];

  currentUser = 'Tú'
  newResponse:any = '';

  constructor() { }

  ngOnInit() {}

  redirect(){
    this.onClick.emit(this.item)
  }

}
