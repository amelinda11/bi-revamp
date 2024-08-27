import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutRoutes } from './layout.routing';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { WeeklyComponent } from '../pages/weekly/weekly.component';
import { ComparationComponent } from '../pages/comparation/comparation.component';
import { ListStoreComponent } from '../pages/list-store/list-store.component';
import { ListAreaComponent } from '../pages/list-area/list-area.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(LayoutRoutes),
        FormsModule,
        NgbModule
    ],
    declarations: [
        DashboardComponent,
        WeeklyComponent,
        ComparationComponent,
        ListStoreComponent,
        ListAreaComponent
    ]
})

export class LayoutAppModule { }
