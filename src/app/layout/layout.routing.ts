import { Routes } from '@angular/router';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { WeeklyComponent } from '../pages/weekly/weekly.component';
import { ComparationComponent } from '../pages/comparation/comparation.component';
import { ListStoreComponent } from '../pages/list-store/list-store.component';
import { ListAreaComponent } from '../pages/list-area/list-area.component';


export const LayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'weekly', component: WeeklyComponent },
    { path: 'comparation', component: ComparationComponent },
    { path: 'list-store', component: ListStoreComponent },
    { path: 'list-area', component: ListAreaComponent },
];
