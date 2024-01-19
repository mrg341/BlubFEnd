import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Subtab11Page } from './subtab1.1.page';

const routes: Routes = [
  {
    path: '',
    component: Subtab11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Subtab11PageRoutingModule {}
