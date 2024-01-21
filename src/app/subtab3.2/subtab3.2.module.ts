import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Subtab32PageRoutingModule } from './subtab3.2-routing.module';

import { Subtab32Page } from './subtab3.2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Subtab32PageRoutingModule
  ],
  declarations: [Subtab32Page]
})
export class Subtab32PageModule {}
