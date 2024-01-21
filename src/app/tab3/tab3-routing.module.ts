import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
    children: [
      {
        path: 'subtab31',
        loadChildren: () => import ('../subtab3.1/subtab3.1.module').then(m => m.Subtab31PageModule)
      },
      {
        path: 'subtab32',
        loadChildren: () => import ('../subtab3.2/subtab3.2.module').then(m => m.Subtab32PageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
