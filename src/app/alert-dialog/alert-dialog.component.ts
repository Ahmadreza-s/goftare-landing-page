import {Component, OnInit,AfterViewInit} from '@angular/core';
import {BsModalService} from "ngx-bootstrap";
import {BsModalRef} from "ngx-bootstrap/modal/bs-modal-ref.service";
import {LoginFormComponent} from "../login-form/login-form.component";
import {RegisterFormComponent} from "../register-form/register-form.component";

declare var $:any;
@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent implements OnInit,AfterViewInit {

  constructor(public bsModalRef: BsModalRef,private modalService: BsModalService) {


  }


  public static parent:BsModalRef;

  //1 : login , 2 : register
  public static type=1;

  ngAfterViewInit(){

    try {

      var modalChild = (<HTMLElement>document.getElementsByClassName('modal-content')[1]);

      modalChild.style['width'] = '80%';
      modalChild.style['margin-left'] = '10%';
      modalChild.style['margin-top'] = '50%';
      modalChild.style['minHeight'] = 'unset';


      var modal0 = (<HTMLElement>document.getElementsByClassName('modal')[0]);
      var modal1 = (<HTMLElement>document.getElementsByClassName('modal')[1]);
      modal0.style['zIndex'] = 'auto';


      modal1.addEventListener('blur', function (e) {
        modal0.style['zIndex'] = '';
      }, false);

    }
    catch (e) {

    }


  }
  ngOnInit() {



  }
  getType(){
    return AlertDialogComponent.type;
  }

  action(){
    if(this.getType()==1){
      this.ClearAllDialogs();
      this.modalService.show(LoginFormComponent);
    }
    else{
      this.ClearAllDialogs();
      this.modalService.show(RegisterFormComponent);
    }
  }

  ClearAllDialogs(){
    this.bsModalRef.hide();
    AlertDialogComponent.parent.hide();
  }

}
