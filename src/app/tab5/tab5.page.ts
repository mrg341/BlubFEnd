import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  public currentUser = [
    {
      id: 'ajolote@gmail.com',
      name: 'ajolote de limón',
      desc: '',
      avat: '',
      qst_count: 3,
      ans_count: 0
    }
  ];

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) { }

  ngOnInit() {
  }

  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

}
