import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('../../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('../../views/notification/notification.module').then(m => m.NotificationPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../../views/account/account.module').then(m => m.AccountPageModule)
      },
      {
        path: 'newpost',
        loadChildren: () => import('../../views/newpost/newpost.module').then(m => m.NewpostPageModule)
      },
      {
        path: 'joboffer',
        loadChildren: () => import('../../views/joboffer/joboffer.module').then(m => m.JobofferPageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('../../views/chat/chat.module').then( m => m.ChatPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }