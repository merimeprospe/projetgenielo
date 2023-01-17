import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayjobPage } from './displayjob.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayjobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayjobPageRoutingModule {}
