import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutRoutes } from './layout.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(LayoutRoutes),
        FormsModule,
        NgbModule
    ],
    declarations: [
        // DashboardComponent,
        // UserComponent,
        // TableComponent,
        // UpgradeComponent,
        // TypographyComponent,
        // IconsComponent,
        // MapsComponent,
        // NotificationsComponent,
    ]
})

export class LayoutAppModule { }
