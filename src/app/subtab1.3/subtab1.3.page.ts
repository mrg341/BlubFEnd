import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtab1.3',
  templateUrl: './subtab1.3.page.html',
  styleUrls: ['./subtab1.3.page.scss'],
})
export class Subtab13Page implements OnInit {

  public questions:any=[/*
    {
      user: 'Mrg_341',
      createdAt: 1705949225000,
      qst: 'Otras preguntas se ven de esta manera.',
      pic: 'https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1619987265163-9XILMVT3TK4HZ5X6538M/VH_01_1080pjpg.jpg',
      pointer: '',
      locatedAt: '',
    },
    {
      user: 'Tú',
      createdAt: 1705949225000,
      qst: 'Tu pregunta, se vería de esta manera.',
      pic: 'https://img.freepik.com/premium-vector/vector-illustration-cute-ghost-cartoon-character_602089-176.jpg',
      pointer: '',
      locatedAt: '',
    },
    {
      user: 'Osote',
      createdAt: 1705949210000,
      qst: 'Esto es una pregunta de prueba, lo más probable es que aún no puedas responder, pero eso sería increíble.',
      pic: 'https://cdn.wikimg.net/es/splatoonwiki/images/6/6f/Don_Oso.png',
      pointer: '',
      locatedAt: '',
    },*/
  ];

  open_new_answer = false;

  constructor() { }

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

  revealNear(){
    
  }

  openTabQst(){

  }

}
