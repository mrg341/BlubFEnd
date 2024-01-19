import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children: [
      {
        path: 'subtab11',
        loadChildren: () => import ('../subtab1.1/subtab1.1.module').then(m => m.Subtab11PageModule)
      },
      {
        path: 'subtab12',
        loadChildren: () => import ('../subtab1.2/subtab1.2.module').then(m => m.Subtab12PageModule)
      },
      {
        path: 'subtab13',
        loadChildren: () => import ('../subtab1.3/subtab1.3.module').then(m => m.Subtab13PageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
