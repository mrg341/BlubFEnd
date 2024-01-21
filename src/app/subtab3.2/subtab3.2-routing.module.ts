import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Subtab32Page } from './subtab3.2.page';

const routes: Routes = [
  {
    path: '',
    component: Subtab32Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Subtab32PageRoutingModule {}
