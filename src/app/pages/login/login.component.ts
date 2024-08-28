import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginProps } from '../../helper/type.model';
import { AppService } from '../../services/app.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    submitted: boolean = false;
    formControls!: string[];
    isLoading: boolean = false;


    constructor(
        private formBuilder: FormBuilder,
        private authServer: AppService,
        private auth: AuthService, 
        private router: Router, 
    ){}

    ngOnInit(): void {
        this.createForm();

    }

    createForm(){
        this.loginForm = this.formBuilder.group(
            { 
                username: ['', [Validators.required]],
                password: ['', [Validators.required]],
            },
        );

        this.formControls = Object.keys(this.loginForm.controls);
    }

    onSubmiLogin(){
        console.log('submir', this.loginForm.value);
        if (this.onValidate()) {

            this.authServer.doLogin(this.loginForm.value).subscribe({
                next: (data: any) => {
                    this.isLoading = false;
                    if (data.success) {
                        sessionStorage.setItem('tokenProject', data.item[0]);
                        const dataUser = data.item[0];
                        const usr: string = JSON.stringify(dataUser);
                        localStorage.setItem('user', usr);
                        this.auth.sendToken(usr);
                        this.router.navigate(['/dashboard']);
                    } else {
                        // this.username = '';
                        // this.password = '';
                        // this.errorMessage = data.message;
                        // this.isErrorFound = true;
                    }
                    // this.successMessage = 'User created successfully!';
                    console.log('User creation successful', data);
                },
                error: (error: Error) => {
                    this.isLoading = false;
                    // this.errorMessage = 'User creation failed. Please try again.';
                    console.error('User creation error:', error);
                }
            });
        }
    }

    onValidate() {
        this.submitted = true;
        return this.loginForm.status === 'VALID';
    }

}


