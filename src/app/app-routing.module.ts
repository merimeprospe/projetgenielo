import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./views/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./view/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login/register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login/reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },  {
    path: 'listjoboffer',
    loadChildren: () => import('./views/listjoboffer/listjoboffer.module').then( m => m.ListjobofferPageModule)
  },
  {
    path: 'displaynotif',
    loadChildren: () => import('./views/displaynotif/displaynotif.module').then( m => m.DisplaynotifPageModule)
  },
  {
    path: 'displayjob',
    loadChildren: () => import('./views/displayjob/displayjob.module').then( m => m.DisplayjobPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./views/search/search.module').then( m => m.SearchPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
