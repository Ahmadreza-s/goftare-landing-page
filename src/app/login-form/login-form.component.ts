import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {BsModalService} from 'ngx-bootstrap';
import {RegisterFormComponent} from '../register-form/register-form.component';
import {ForgetpasswordFormComponent} from '../forgetpassword-form/forgetpassword-form.component';
import {AlertDialogComponent} from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginFormComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef, private modalService: BsModalService) {

  }

  hide = true;
  loading = false;

  ngOnInit() {
  }


  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'فیلد اجباری' :
      this.email.hasError('email') ? 'ایمیل را به درستی وارد کنید' : this.email.hasError('notExist') ? 'ایمیل وجود ندارد' : this.email.hasError('block') ? 'ایمیل مورد نظر بلاک شده است' : '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'فیلد اجباری' : this.password.hasError('wrong') ? 'رمز عبور نادرست می باشد' : '';
  }

  showRegisterDialog() {
    this.bsModalRef.hide();
    this.modalService.show(RegisterFormComponent);
  }

  showForgetPassDialog() {
    this.bsModalRef.hide();
    this.modalService.show(ForgetpasswordFormComponent);
  }

  login() {
    if (!this.checkError()) {

    }
  }

  checkError() {
    var error = false;
    if (this.email.invalid) {
      this.email.markAsTouched();
      error = true;
    }
    if (this.password.invalid) {
      this.password.markAsTouched();
      error = true;
    }
    return error;
  }

  ShowAlertDialog() {
    AlertDialogComponent.type = 2;
    AlertDialogComponent.parent = this.bsModalRef;
    this.modalService.show(AlertDialogComponent);
  }

}
