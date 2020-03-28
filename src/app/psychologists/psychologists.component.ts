import { Component, OnInit } from '@angular/core';
import {DialogService} from "../_services/dialog.service";

@Component({
  selector: 'app-psychologists',
  templateUrl: './psychologists.component.html',
  styleUrls: ['./psychologists.component.css']
})
export class PsychologistsComponent implements OnInit {

  constructor(private dialogService:DialogService) { }

  ngOnInit() {
  }
  openRegisterModal() {
    this.dialogService.ShowRegisterDialog();
  }

}
