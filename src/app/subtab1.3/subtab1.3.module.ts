import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Subtab13PageRoutingModule } from './subtab1.3-routing.module';

import { Subtab13Page } from './subtab1.3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Subtab13PageRoutingModule
  ],
  declarations: [Subtab13Page]
})
export class Subtab13PageModule {}
