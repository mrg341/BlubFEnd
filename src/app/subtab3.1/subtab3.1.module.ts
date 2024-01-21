import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Subtab31PageRoutingModule } from './subtab3.1-routing.module';

import { Subtab31Page } from './subtab3.1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Subtab31PageRoutingModule
  ],
  declarations: [Subtab31Page]
})
export class Subtab31PageModule {}
