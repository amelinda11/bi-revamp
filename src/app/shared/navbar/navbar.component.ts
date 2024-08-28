import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { ROUTES } from '../../sidebar/sidebar.component';
import { TimeHelperService } from '../../helper/time-helper.service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit {
    changePassForm!: FormGroup;
    listTitles: any;
    location: Location;
    nativeElement: Node;
    toggleButton: any;
    sidebarVisible: boolean;
    currentTime: string;
    formattedDate: string;
    isVisibleModal: boolean = false;
    isLoadingModal: boolean = false;
    submitted = false;
    formControls!: string[];
    formRules = {
        passwordMin: 6,
        passwordMax: 16,
        passwordPattern: '^[a-zA-Z0-9]*$'
    };
    errorMessages: any;

    public isCollapsed = true;
    @ViewChild("navbar-cmp", { static: false }) button: any;

    constructor(
        location: Location,
        private element: ElementRef,
        private router: Router,
        private timeHelper: TimeHelperService,
        private formBuilder: FormBuilder,
        private auth: AuthService
    ) {
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        this.currentTime = this.timeHelper.getCurrentTime();
        this.formattedDate = this.timeHelper.formatDate(new Date());
        this.errorMessages = {
            password: {
                required: 'Password is required',
                pattern: 'Password must contain alphanumeric',
                minLength: `Password must be at least ${this.formRules.passwordMin} characters`
            },
            confirmPassword: {
                required: 'Password confirmation is required',
                passwordMismatch: 'Passwords must match'
            },
        };
    }

    ngOnInit() {
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        var navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        this.router.events.subscribe((event) => {
            this.sidebarClose();
        });
        setInterval(() => {
            this.currentTime = this.timeHelper.getCurrentTime();
        }, 1000);
        this.createForm();
    }

    createForm() {
        this.changePassForm = this.formBuilder.group(
            {
                password: ['',
                    [
                        Validators.required,
                        Validators.minLength(this.formRules.passwordMin),
                        Validators.maxLength(this.formRules.passwordMax),
                        Validators.pattern(this.formRules.passwordPattern)
                    ]
                ],
                confirmPassword: ['',
                    [
                        Validators.required,
                        Validators.minLength(this.formRules.passwordMin),
                        Validators.maxLength(this.formRules.passwordMax),
                        Validators.pattern(this.formRules.passwordPattern)
                    ]
                ],
            },
            { validators: [this.confirmPassword] }
        );

        this.formControls = Object.keys(this.changePassForm.controls);
    }

    confirmPassword(control: AbstractControl): ValidationErrors | null {
        const password = control.get('password');
        const confirm = control.get('confirmPassword');
        if (password?.valid && password?.value === confirm?.value) {
            confirm?.setErrors(null);
            return null;
        }
        confirm?.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true };
    }

    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        const mainPanel = <HTMLElement>document.getElementsByClassName('main-panel')[0];
        if (window.innerWidth < 991) {
            setTimeout(function () {
                mainPanel.style.position = '';
            }, 500);
        }
        this.toggleButton?.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };

    changePass(action: boolean) {
        this.isLoadingModal = false;
        this.isVisibleModal = action;
    }

    onActionModal(event: any) {
        this.isVisibleModal = event == 'save' ? true : false;
        this.submitted = event == 'save' ? true : false;
        if (this.submitted) this.onSubmitChangePass();
        else this.changePassForm.reset();
    };

    onSubmitChangePass() {
        console.log('submit', this.formControls);
        console.log('submit w', this.changePassForm);
        if (this.onValidate()) {
            this.isLoadingModal = true;
        }
    };

    onValidate() {
        this.submitted = true;
        return this.changePassForm.status === 'VALID';
    }

    logout() {
        this.auth.logout();
    };
}
