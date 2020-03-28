import { Injectable } from '@angular/core';
import {BsModalService} from "ngx-bootstrap";
import {RegisterFormComponent} from "../register-form/register-form.component";
import {LoginFormComponent} from "../login-form/login-form.component";
import {ForgetpasswordFormComponent} from "../forgetpassword-form/forgetpassword-form.component";
import {AlertDialogComponent} from "../alert-dialog/alert-dialog.component";

@Injectable()
export class DialogService {

  constructor(private modalService: BsModalService) { }

  ShowRegisterDialog(){
    this.modalService.show(RegisterFormComponent);
  }
  ShowLoginDialog(){
    this.modalService.show(LoginFormComponent);
  }
  ShowForgetPassDialog(){
    this.modalService.show(ForgetpasswordFormComponent);
  }
  ShowAlertDialog(type){
    this.modalService.show(AlertDialogComponent);
  }

}
