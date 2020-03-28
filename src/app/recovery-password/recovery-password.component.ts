import {Component, OnInit} from '@angular/core';
import {DialogService} from '../_services/dialog.service';
import {FormControl, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.css']
})
export class RecoveryPasswordComponent implements OnInit {

  constructor(private dialogService: DialogService, private route: ActivatedRoute) {
    this.token = decodeURIComponent(this.route.snapshot.paramMap.get('token'));
    console.log(this.token);
  }

  ngOnInit() {
  }

  token;
  loading = false;
  ok = false;
  msg = '';
  msgColor = '#0092D3';


  password = new FormControl('', [Validators.required]);
  password2 = new FormControl('', [Validators.required]);

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'فیلد اجباری' : '';
  }

  getPassword2ErrorMessage() {
    return this.password2.hasError('required') ? 'فیلد اجباری' : this.password2.hasError('same') ? 'تکرار رمز عبور مطابقت ندارد' : '';
  }

  recovery() {

    if (!this.checkError()) {
    }
  }

  checkError() {
    let error = false;
    if (this.password.invalid) {
      this.password.markAsTouched();
      error = true;
    }
    if (this.password.value != this.password2.value) {
      this.password2.setErrors({'same': true});
      this.password2.markAsTouched();
      error = true;
    }
    return error;
  }
}
