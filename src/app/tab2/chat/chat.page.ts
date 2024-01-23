import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  name: string = 'Osote';
  messages: any = [
    {
      user: 'Osote',
      createdAt: 1705949210000,
      msg: 'Bienvenido a la pre-aplha de Blub.'
    },
    {
      user: 'Tú',
      createdAt: 1705949222000,
      msg: 'Aún esto está en desarrollo y esto es de prueba.'
    },
    {
      user: 'Osote',
      createdAt: 1705949225000,
      msg: 'De todos modos, espero que esto te esté gustando.'
    },
    {
      user: 'Tú',
      createdAt: 1705949226000,
      msg: 'Puedes probar todo lo que quieras, si hay algo que no cuadra, avísame.'
    },
    {
      user: 'Osote',
      createdAt: 1705949227000,
      msg: 'Ten en cuenta que estas funciones de mensajería aún no están implementadas, por lo que tus mensajes enviados, son automáticamente deshechados.'
    }
  ];

  currentUser = 'Tú'
  newMsg:any = '';
  @ViewChild(IonContent) content:IonContent;
  isLoading = false;

  constructor() { }

  ngOnInit() {
  }

  sendMessage(){
    this.messages.push({
      user: 'Tú',
      createdAt: new Date().getTime(),
      msg: this.newMsg
    });

    this.newMsg = '';
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
  }
}
