import { Component, OnInit } from '@angular/core';
import {DialogService} from "../_services/dialog.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private dialogService:DialogService) { }

  ngOnInit() {
  }
  openRegisterModal() {
    this.dialogService.ShowRegisterDialog();
  }
}
