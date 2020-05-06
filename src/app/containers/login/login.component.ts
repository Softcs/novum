import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { GatewayService } from '@app/_services';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
  host: {class: 'router-flex'}
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private gatewayService: GatewayService
    ) {
        // redirect to home if already logged in
        if (this.gatewayService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            remember: [false]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    private checkErrors(data: any):boolean {
        if(data == null || data.Errors == null || data.Errors.length === 0) {
            return false;
        }

        this.error = data.Errors[0].Message;
        return true;
    }

    saveToLocalStorage() {
        this.gatewayService.canUseLocalStorage = this.f.remember.value;
        this.gatewayService.saveCurrentUser();
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        const oprLogin = this.gatewayService.login(this.f.username.value, this.f.password.value);
        this.gatewayService.executeOperation(oprLogin)
            .pipe(first())
            .subscribe(
                data => {
                    if (data.length === 1) {
                        data = data[0];
                        console.log("login",data);
                        if(!this.checkErrors(data)) {
                            this.saveToLocalStorage();
                            this.router.navigate([this.returnUrl]);

                        } else {
                            this.loading = false;
                        }
                        if (data.forceLogout) {
                            this.gatewayService.removeCurrentUser();
                        }
                    }
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }
}
