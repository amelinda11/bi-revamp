import { Routes } from '@angular/router';

import { LayoutAppComponent } from './layout/layout.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: LayoutAppComponent,
    children: [
        {
      path: '',
        loadChildren: () => import('./layout/layout.module').then(x => x.LayoutAppModule)
  }]},
  {
    path: '**',
    redirectTo: 'dashboard'
  }
]
