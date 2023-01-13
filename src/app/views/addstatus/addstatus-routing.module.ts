import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddstatusPage } from './addstatus.page';

const routes: Routes = [
  {
    path: '',
    component: AddstatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddstatusPageRoutingModule {}
