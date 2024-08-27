import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalAppModule } from '../modal/modal.module';

import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    ValidationErrors,
    Validators
} from '@angular/forms';

import {
    ButtonDirective,
    ButtonGroupComponent,
    CardBodyComponent,
    CardComponent,
    ColComponent,
    ColDirective,
    FormCheckComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective,
    FormControlDirective,
    FormDirective,
    FormFeedbackComponent,
    FormLabelDirective,
    RowComponent,
    TextColorDirective,
    FormModule
} from '@coreui/angular';

@NgModule({
    imports: [
        RouterModule, 
        CommonModule, 
        NgbModule,
        ReactiveFormsModule,
        FormModule,
        ModalAppModule,
        FormCheckComponent,
        FormCheckInputDirective,
        FormCheckLabelDirective,
        FormControlDirective,
        FormDirective,
        FormFeedbackComponent,


    ],
    declarations: [ NavbarComponent ],
    exports: [ NavbarComponent ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class NavbarModule {}
