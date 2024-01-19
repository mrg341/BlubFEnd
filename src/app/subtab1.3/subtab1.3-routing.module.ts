import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Subtab13Page } from './subtab1.3.page';

const routes: Routes = [
  {
    path: '',
    component: Subtab13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Subtab13PageRoutingModule {}
