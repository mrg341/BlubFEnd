import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs';
import { ModalController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {


  @ViewChild('new_chat') modal: ModalController;
  @ViewChild('popover') popover: PopoverController;
  segment = 'chats';
  open_new_chat = false;
  /*users: Observable<any[]>;*/
  users = [
    { id: 1, name: 'Osote', photo: 'https://cdn.wikimg.net/es/splatoonwiki/images/6/6f/Don_Oso.png' },
  ];
  chatRooms = [
    { id: 1, name: 'Osote', photo: 'https://cdn.wikimg.net/es/splatoonwiki/images/6/6f/Don_Oso.png' },
  ];

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService, private router: Router) { }

  ngOnInit() {

  }

  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

  onSegmentChanged(event: any) {
    console.log(event)
  }

  newChat() {
    this.open_new_chat = true;
  }

  onWillDismiss(event: any) {
    console.log(event)
  }

  cancel() {
    this.modal.dismiss();
    this.open_new_chat = false;
  }

  startChat(item) {
    const url = ['tab2/chats', item?.id];
    console.log('Navigating to:', url);
    this.router.navigate(url);
    this.cancel()
  }

  getChat(item) {
    const url = ['tab2/chats', item?.id];
    console.log('Navigating to:', url);
    this.router.navigate(url);
    this.cancel()
    /*this.router.navigate(['/', 'tab2', 'chats', item?.id])*/
  }

}

/*{
  nombre: "Juan Perez",
  edad: 28,
  correo: "juan.perez@example.com",
  direccion: {
    calle: "Calle Principal 123",
    ciudad: "Ciudad Ejemplo",
    codigoPostal: "12345"
  },
  telefono: "+1234567890",
  intereses: ["Programación", "Viajes", "Deportes"],
  suscritoNewsletter: true
};*/