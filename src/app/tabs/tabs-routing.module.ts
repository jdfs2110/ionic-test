import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/app/tabs/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'config',
        loadChildren: () => import('../config/config.module').then(m => m.ConfigPageModule)
      }
  
    ]
  },
  {
    path: '',
    redirectTo: '/app/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {
}
