import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-subtab1.2',
  templateUrl: './subtab1.2.page.html',
  styleUrls: ['./subtab1.2.page.scss'],
})
export class Subtab12Page implements OnInit {

  @ViewChild('new_chat') modal: ModalController;
  @ViewChild('popover') popover: PopoverController;
  segment='chats';
  open_new_answer = false;
  /*users: Observable<any[]>;*/

  public questions:any=[
    {
      username: 'Mrg_341',
      createdAt: 1705949225000,
      qst: 'Otras preguntas se ven de esta manera.',
      avat: 'https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1619987265163-9XILMVT3TK4HZ5X6538M/VH_01_1080pjpg.jpg'
    },
    {
      username: 'Tú',
      createdAt: 1705949225000,
      qst: 'Tu pregunta, se vería de esta manera.',
      avat: 'https://img.freepik.com/premium-vector/vector-illustration-cute-ghost-cartoon-character_602089-176.jpg'
    },
    {
      username: 'Osote',
      createdat: 1705949210000,
      qst: 'Esto es una pregunta de prueba, lo más probable es que aún no puedas responder, pero eso sería increíble.',
      avat: 'https://cdn.wikimg.net/es/splatoonwiki/images/6/6f/Don_Oso.png'
    },
  ];

  currentUsername = 'Tú'

  constructor(private router:Router) { }

  ngOnInit() {
  }

  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
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
