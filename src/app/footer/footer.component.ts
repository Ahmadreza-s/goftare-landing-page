import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  instagramPage(){
    window.open('https://instagram.com/goftare_com','_blank');
  }

  telegramPage(){
    window.open('https://t.me/goftare_com','_blank');
  }
  facebookPage(){
    window.open('https://fb.com','_blank');
  }
  linkedInPage(){
    window.open('http://linkedin.com','_blank');
  }
  twitterPage(){
    window.open('https://twiiter.com','_blank');
  }
}
