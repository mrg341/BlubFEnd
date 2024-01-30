import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PicEditPage } from './pic-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PicEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PicEditPageRoutingModule {}
