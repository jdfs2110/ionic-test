import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ConfigPage } from '../config/config.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'config',
    redirectTo: '/config'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
