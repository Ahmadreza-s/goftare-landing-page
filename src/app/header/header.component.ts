import {Component, OnInit} from '@angular/core';
import {DialogService} from "../_services/dialog.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dialogService:DialogService) {}
  ngOnInit() {
  }
  openRegisterModal() {
    this.dialogService.ShowRegisterDialog();
  }
  openLoginModal() {
    this.dialogService.ShowLoginDialog();
  }
}
