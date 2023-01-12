import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobofferPage } from './joboffer.page';

const routes: Routes = [
  {
    path: '',
    component: JobofferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobofferPageRoutingModule {}
