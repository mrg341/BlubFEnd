import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  segment='chats';
  open_new_chat = false;

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}

  ngOnInit(){

  }
   
  onSegmentChanged(event: any){
    console.log(event)
  }

  newChat(){

  }

  onWillDismiss(event: any){

  }

  cancel(){

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