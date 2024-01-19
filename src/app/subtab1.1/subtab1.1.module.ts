import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Subtab11PageRoutingModule } from './subtab1.1-routing.module';

import { Subtab11Page } from './subtab1.1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Subtab11PageRoutingModule
  ],
  declarations: [Subtab11Page]
})
export class Subtab11PageModule {}
