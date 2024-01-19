import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}

}
