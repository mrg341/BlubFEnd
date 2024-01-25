import { HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subtab1.1',
  templateUrl: './subtab1.1.page.html',
  styleUrls: ['./subtab1.1.page.scss'],
})
export class Subtab11Page implements OnInit {

  open_new_answer = false;
  currentUser = '';
  
  public questions:any = [
    /*{
    user: 'Mrg_341',
    createdAt: 1705949225000,
    qst: 'Del mismo modo que, esta pregunta, apuntaría a tu usuario. En este caso, he colocado SOLO EN ESTA PÁGINA que el usuario sea nulo, de modo que esta pregunta siempre recurre a nadie, y por tanto, a tí. 😋',
    pic: 'https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1619987265163-9XILMVT3TK4HZ5X6538M/VH_01_1080pjpg.jpg',
    pointer: ''
    }*/
];
  

  constructor(private router:Router) { }

  ngOnInit() {

  }

  answer(){
    this.open_new_answer = true;
    console.log("Abriendo tablero para responder")
  }

  onWillDismiss(event: any){

  }

  cancel(){
    this.open_new_answer = false;
  }


  openTabQst(){

  }

}
