import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {BsModalService} from 'ngx-bootstrap';
import {FormControl, Validators} from '@angular/forms';
import {LoginFormComponent} from '../login-form/login-form.component';

@Component({
  selector: 'app-forgetpassword-form',
  templateUrl: './forgetpassword-form.component.html',
  styleUrls: ['./forgetpassword-form.component.css']
})
export class ForgetpasswordFormComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef, private modalService: BsModalService) {

  }

  hide = true;
  loading = false;
  ok = false;
  msg = '';
  msgColor = '#0092D3';

  ngOnInit() {
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'فیلد اجباری' :
      this.email.hasError('email') ? 'ایمیل را به درستی وارد کنید' :
        '';
  }

  showLoginDialog() {
    this.bsModalRef.hide();
    this.modalService.show(LoginFormComponent);
  }


  forgetpassword() {
    this.ok = !this.ok;
    if (!this.checkError()) {

    }
  }

  checkError() {
    var error = false;
    if (this.email.invalid) {
      this.email.markAsTouched();
      error = true;
    }
    return error;
  }

}
