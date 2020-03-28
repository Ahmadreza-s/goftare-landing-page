import { Component, OnInit } from '@angular/core';
import {DialogService} from "../_services/dialog.service";
declare var $:any;
declare var Hammer:any;
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private dialogService:DialogService) { }

  ngOnInit() {
    this.setGestureOnCarousel();


  }
  openRegisterModal() {
    this.dialogService.ShowRegisterDialog();
  }
  setGestureOnCarousel(){
    var myElement = document.getElementById('commentsCarousel');
    var mc = new Hammer(myElement);
    mc.on("swipeleft swiperight", function(ev) {
      if(ev.type=='swipeleft')
        $('#commentsCarousel').carousel('next');
      else if(ev.type=='swiperight')
        $('#commentsCarousel').carousel('prev');
    });
  }




}
