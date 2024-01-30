import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtab3.1',
  templateUrl: './subtab3.1.page.html',
  styleUrls: ['./subtab3.1.page.scss'],
})
export class Subtab31Page implements OnInit {

  public users:any = [
    {
      username: 'Ajolote'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  sendqst(){
    const qst = document.getElementById('qst') as HTMLInputElement;
    const pointer = document.getElementById('pointer') as HTMLInputElement;

    if (qst && pointer) {
      alert('Aún no se ha mandado tu pregunta, puesto que no hay conexión con la Base de Datos, pero tu pregunta es: ' + qst.value + ', y tu apuntador, ' + pointer.value);
    } else {
      alert('Algo no ha ido bien con tu pregunta. Contáctame y le daré una solución, o bien, espera a que tu conexión sea más estable.');
    }   
}

}