import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListjobofferPage } from './listjoboffer.page';

const routes: Routes = [
  {
    path: '',
    component: ListjobofferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListjobofferPageRoutingModule {}
