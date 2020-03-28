import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {FormControl, Validators} from '@angular/forms';
import {BsModalService} from 'ngx-bootstrap';
import {LoginFormComponent} from '../login-form/login-form.component';
import {AlertDialogComponent} from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterFormComponent implements OnInit {


  constructor(public bsModalRef: BsModalRef, private modalService: BsModalService) {
  }

  ngOnInit() {

  }

  loading = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.maxLength(32), Validators.minLength(6)]);
  hide = true;

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'فیلد اجباری' :
      this.email.hasError('email') ? 'ایمیل را به درستی وارد کنید' : this.email.hasError('duplicateEmail') ? 'ایمیل تکراری' :
        this.email.hasError('error') ? 'خطا در فرآیند ثبت نام' : '';
  }

  getUsernameErrorMessage() {
    return this.username.hasError('required') ? 'فیلد اجباری' : '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'فیلد اجباری' : this.password.hasError('maxlength') || this.password.hasError('minlength') ? 'طول رمز عبور حداقل ۶ کاراکتر و حداکثر ۳۲ کاراکتر می باشد' : '';
  }

  showLoginDialog() {
    this.bsModalRef.hide();
    this.modalService.show(LoginFormComponent);
  }

  register() {
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
    if (this.username.invalid) {
      this.username.markAsTouched();
      error = true;
    }
    return error;
  }

  ShowAlertDialog() {
    AlertDialogComponent.type = 1;
    AlertDialogComponent.parent = this.bsModalRef;
    this.modalService.show(AlertDialogComponent);
  }
}
