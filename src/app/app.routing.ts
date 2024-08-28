import { Routes } from '@angular/router';

import { LayoutAppComponent } from './layout/layout.component';
import { LoginComponent } from './pages/login/login.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    }, 
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'Login Page'
        }
    },
    {
        path: 'dashboard',
        component: LayoutAppComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./layout/layout.module').then(x => x.LayoutAppModule)
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
]
