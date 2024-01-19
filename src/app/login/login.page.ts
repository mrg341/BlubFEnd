import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) { }

  ngOnInit() {
  };

  

  login() {
    this.auth.loginWithRedirect({
      appState: {
        target: 'tabs/login'
      }
    });
  };

  logout() {
    this.auth.logout({
      logoutParams: {
        returnTo: this.document.location.origin
      }
    });
  };

  /*mainRedir(){
    this.navCtrl.navigateForward(['/tabs'])
  };*/

}
