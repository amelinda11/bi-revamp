import { NgModule } from '@angular/core';

import { ModalComponent } from './modal.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalModule } from '@coreui/angular';
import { LoadingAppModule } from '../loading/loading.module';

@NgModule({
    imports: [RouterModule, CommonModule, ModalModule, LoadingAppModule],
    declarations: [ModalComponent],
    exports: [ModalComponent]
})
export class ModalAppModule { }
