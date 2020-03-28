import {Component, HostListener, OnInit} from '@angular/core';
import {DialogService} from "../_services/dialog.service";

@Component({
  selector: 'app-howto',
  templateUrl: './howto.component.html',
  styleUrls: ['./howto.component.css']
})
export class HowtoComponent implements OnInit {

  constructor(private dialogService:DialogService) {
    this.isMobile = document.documentElement.clientWidth < 767;
  }

  ngOnInit() {
  }
  isMobile=false;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobile = event.target.innerWidth < 767;
  }
  openRegisterModal() {
    this.dialogService.ShowRegisterDialog();
  }
}
