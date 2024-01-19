import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Subtab12PageRoutingModule } from './subtab1.2-routing.module';

import { Subtab12Page } from './subtab1.2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Subtab12PageRoutingModule
  ],
  declarations: [Subtab12Page]
})
export class Subtab12PageModule {}
