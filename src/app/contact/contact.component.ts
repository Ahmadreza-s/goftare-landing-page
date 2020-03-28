import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {MatDialog, MAT_DIALOG_DATA, MatIconRegistry} from '@angular/material';
import {DomSanitizer} from "@angular/platform-browser";

declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http:HttpClient,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,public dialog: MatDialog) {
    iconRegistry.addSvgIcon(
      'instagram',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/instagram.svg'));

    iconRegistry.addSvgIcon(
      'telegram',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/telegram.svg'));


  }

  dialogTitle:string;
  dialogBody:string;
  dialogIcon:string;
  dialogIconColor:string;
  @ViewChild('successDialog') successDialog;
  loading=false;
  ngOnInit() {
  }
  instagramPage(){
    window.open('https://instagram.com/goftare_com','_blank');
  }

  telegramPage(){

    window.open('https://t.me/goftare_com','_blank');
  }
  mailTo(){
    window.open('mailto:goftare.co@gmail.com?subject=تماس با ما','_self');
  }
  call(){
    window.open('tel:02128429926','_self');
  }


  email = new FormControl('', [Validators.required, Validators.email]);
  username = new FormControl('', [Validators.required]);
  subject = new FormControl('', [Validators.required]);
  message= new FormControl('', [Validators.required]);
  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'فیلد اجباری' :
      this.email.hasError('email') ? 'ایمیل را به درستی وارد کنید' :
        '';
  }
  getRequiredError() {
    return this.username.hasError('required') ? 'فیلد اجباری' :'';
  }

  checkError(){
    var error=false;
    if(this.subject.invalid){
      this.subject.markAsTouched();
      error=true;
    }
    if(this.username.invalid){
      this.username.markAsTouched();
      error=true;
    }
    if(this.email.invalid){
      this.email.markAsTouched();
      error=true;
    }
    if(this.message.invalid){
      this.message.markAsTouched();
      error=true;
    }
    return error;
  }

  sendMessage(){


    if(!this.checkError()){

    }
  }

  showErrorMessage(){
    var l=($('.contactUsForm').width() / 2 ) - 125 + 15;
    this.dialogTitle="خطا در ارسال پیام";
    this.dialogBody="لطفا دوباره تلاش کنید";
    this.dialogIcon='warning';
    this.dialogIconColor='#f75858cc';
    this.dialog.open(this.successDialog,{direction:"rtl",width:'250px',maxWidth:'250px',minWidth:'250px',position:{left:l+'px'}});
  }
  showSuccessMessage(){
    var l=($('.contactUsForm').width() / 2 ) - 125 + 15;
    this.dialogTitle="تماس با ما";
    this.dialogBody="پیام شما با موفقیت ارسال شد";
    this.dialogIcon='check';
    this.dialogIconColor='green';
    this.dialog.open(this.successDialog,{direction:"rtl",width:'250px',maxWidth:'250px',minWidth:'250px',position:{left:l+'px'}});
  }

  resetInputs(){
    this.username.reset();
    this.email.reset();
    this.subject.reset();
    this.message.reset();
  }

}
