import { SitChangeCompanyComponent } from './../../containers/sit-change-company/sit-change-company.component';
import { Component, OnInit, Output, HostListener, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { GatewayService } from '@app/_services';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Directive } from '@angular/core';
import {environment} from '../../../environments/environment';


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
    passType = "password";
    capsOn;
    currentApplicationVersion = environment.appVersion;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private gatewayService: GatewayService,
        public matDialog: MatDialog,

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

        this.error = data.Errors[0].message;
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
        const userName = this.f.username.value;
        const password = this.f.password.value;
        const oprLogin = this.gatewayService.login(userName, password, null);
        this.gatewayService.executeOperation(oprLogin)
            .pipe(first())
            .subscribe(
                data => {
                    if (data.length === 1) {
                        const response = data[0];
                        if (!this.checkErrors(response)) {
                            const company = this.gatewayService.createCompany(response.companyConfig);
                            const user = this.gatewayService.createUser(userName, password, company);

                            this.gatewayService.setCurrentUser(user);
                            this.saveToLocalStorage();
                            this.router.navigate([this.returnUrl]);
                        } else {
                            this.loading = false;
                        }
                        if (response.forceLogout) {
                            this.gatewayService.removeCurrentUser();
                        }
                    }
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }

    showPassword() {
      if (this.passType === 'password')
        { this.passType = 'text'; }
      else
        { this.passType = 'password'; }

      console.log(this.passType)
    }

    // openModalChangeCompany() {
    //   const dialogConfig = new MatDialogConfig();
    //   dialogConfig.disableClose = true;
    //   dialogConfig.id = "modal-component";
    //   dialogConfig.hasBackdrop = true;
    //   // dialogConfig.height = "440px";
    //   dialogConfig.width = "500px";
    //   // https://material.angular.io/components/dialog/overview
    //   const modalDialog = this.matDialog.open(SitChangeCompanyComponent, dialogConfig);
    // }
}

@Directive({ selector: '[capsLock]' })
export class TrackCapsDirective {
  @Output('capsLock') capsLock = new EventEmitter<Boolean>();

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    this.capsLock.emit(event.getModifierState && event.getModifierState('CapsLock'));
  }
  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void {
    this.capsLock.emit(event.getModifierState && event.getModifierState('CapsLock'));
  }

}
