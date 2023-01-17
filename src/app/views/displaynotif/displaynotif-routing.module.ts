import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplaynotifPage } from './displaynotif.page';

const routes: Routes = [
  {
    path: '',
    component: DisplaynotifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplaynotifPageRoutingModule {}
