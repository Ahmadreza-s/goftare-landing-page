import {Component, HostListener, OnInit} from '@angular/core';
import {DialogService} from "../_services/dialog.service";

declare var $:any;

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.css']
})
export class WhyComponent implements OnInit {

  hover:boolean=false;

  warning=[false,false,false,false,false];
  constructor(private dialogService:DialogService) {



  }
  isMobile=false;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobile = event.target.innerWidth < 767;
  }
  openRegisterModal() {
    this.dialogService.ShowRegisterDialog();
  }
  ngOnInit() {
    this.isMobile=document.documentElement.clientWidth < 767;
    var tbl=$('#table2');
    var btn=$('#btnStart');
    var x=tbl.offset().left - btn.offset().left - btn.width()/2 + tbl.width()/2;
    btn[0].style['margin-left']=x+'px';
  }

  getBackgroundColor(){
    if(this.isMobile){
      return "white";
    }
    return this.hover ? "white" : "#FDFDFD";
  }

  getWarningBackgroundColor(i,left){
    return !left ? !this.warning[i] ? "white" : "#F3FFFB" : !this.warning[i] ? "white" : "#FFF3F3";
  }
  getOpacity(){
    if(this.isMobile){
      return "1";
    }
    return this.hover ? "1" : ".8";
  }

  changeOpacity(bright){
    this.hover=bright;
  }

  warningVisibility(i,show){
    this.warning[i]=show;
  }
  goToPage(){
    window.location.href="https://www.google.com";
  }

}
