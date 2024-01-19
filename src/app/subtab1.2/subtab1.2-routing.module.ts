import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Subtab12Page } from './subtab1.2.page';

const routes: Routes = [
  {
    path: '',
    component: Subtab12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Subtab12PageRoutingModule {}
