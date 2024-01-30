import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PicEditPageRoutingModule } from './pic-edit-routing.module';

import { PicEditPage } from './pic-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PicEditPageRoutingModule
  ],
  declarations: [PicEditPage]
})
export class PicEditPageModule {}
