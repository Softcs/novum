import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';
import { GatewayService } from '@app/_services';
import { MatDialog } from '@angular/material/dialog';
// import { MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'sit-password-recovery',
  templateUrl: './sit-password-recovery.component.html',
  styleUrls: ['./sit-password-recovery.component.scss'],
  host: {class: 'router-flex sit-password-recovery-component user-auths-component'},
})
export class SitPasswordRecoveryComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  passType = "password";
  eyeIcon = 'visibility_off';
  capsOn;

  // constructor() { }
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

// console.log('this.router: ', this.router);

  }

  // convenience getter for easy access to form fields
  get f () { return this.loginForm.controls; }

  ngOnInit (): void {

    // this.loginForm = this.formBuilder.group({
    //   email: ['', Validators.required], //, Validators.email
    //   emailConfirm: ['', Validators.required],
    // });

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], 
      emailConfirm: ['', [Validators.required, Validators.email]],
    });

    this.loginForm.addValidators(this.comparisonValidator());

// console.log('ngOnInit: this.loginForm: ', this.loginForm);
console.log('ngOnInit: this.loginForm: ', this.f);

    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  public comparisonValidator() : ValidatorFn{
    
    return (group: FormGroup): ValidationErrors => {

       const control1 = group.controls['email'];
       const control2 = group.controls['emailConfirm'];

       if (control1.value !== control2.value) {
          control2.setErrors({
            ...control2.errors,
            notEquivalent: true
          });
       } else {
          delete control2.errors?.notEquivalent;
          control2.setErrors(control2.errors);
       }

// console.log('comparisonValidator: control2.errors-2: ', control2.errors );

       return;
    };
  }


  onSubmit () {
    this.submitted = true;

console.log('onSubmit: this.loginForm: ', this.loginForm);

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

  }



}
