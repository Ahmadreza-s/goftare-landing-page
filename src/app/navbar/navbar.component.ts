import {Component, OnInit, AfterViewInit, Input} from '@angular/core';
import {DialogService} from "../_services/dialog.service";
import {document} from "ngx-bootstrap/utils/facade/browser";
import {ScrollToService} from "@nicky-lenaers/ngx-scroll-to";
import {Router} from "@angular/router";

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @Input() path:string;
  constructor(private router:Router,private dialog: DialogService,private _scrollToService: ScrollToService) {
  }

  menuButtonIcon='menu';
  ngAfterViewInit() {
    var btn12=$(".btn12");
    if(this.path=='contact'){
      btn12.removeClass('zoomOut');
      if(!btn12.hasClass('zoomIn')){
        btn12.addClass('zoomIn');
      }


      var self = this;
      $('#menuBtn').click(function () {
        if ($('#myNav').hasClass('open')) self.closeMenu();
        else self.openMenu();
      });
      $('.app-contac').addClass('active');
      $('.app-howt').removeClass('active');
      $('.app-servi').removeClass('active');
      $('.app-wh').removeClass('active');
      $('.app-appli').removeClass('active');
      $('.app-abou').removeClass('active');

    }
    else if(this.path=='about'){
      btn12.removeClass('zoomOut');
      if(!btn12.hasClass('zoomIn')){
        btn12.addClass('zoomIn');
      }

      var self = this;
      $('#menuBtn').click(function () {
        if ($('#myNav').hasClass('open')) self.closeMenu();
        else self.openMenu();
      });
      $('.app-abou').addClass('active');
      $('.app-howt').removeClass('active');
      $('.app-servi').removeClass('active');
      $('.app-wh').removeClass('active');
      $('.app-appli').removeClass('active');
      $('.app-contac').removeClass('active');
    }
    else if(this.path=='home'){
      //btn12.removeClass('animated fadeInDown');
      btn12.toggleClass('zoomOut');

      $.fn.isInViewPort = function () {
        var offsTop = $(this)[0].offsetTop - 52;
        var height = $(this).outerHeight(true);
        var docOffsTop = $(document).scrollTop();
        return docOffsTop >= offsTop && docOffsTop <= offsTop + height;
      };
      $(window).scroll(function () {
        try {
          if ($('#app-howto .fullScreen').isInViewPort()) $('.app-howt').addClass('active');
          else $('.app-howt').removeClass('active');

          if ($('#app-services .fullScreen').isInViewPort()) $('.app-servi').addClass('active');
          else $('.app-servi').removeClass('active');

          if ($('#app-why .fullScreen').isInViewPort()) $('.app-wh').addClass('active');
          else $('.app-wh').removeClass('active');

          if ($('#app-applications .fullScreen').isInViewPort()) $('.app-appli').addClass('active');
          else $('.app-appli').removeClass('active');
        }
        catch (e) {

        }

      });
      var self = this;
      $('#menuBtn').click(function () {

        if ($('#myNav').hasClass('open')) {
          self.closeMenu();
        }
        else {
          if ($(document).scrollTop() < $('#app-header .fullScreen').outerHeight(true))
            $('body,html').animate({
              scrollTop: $('#app-header .fullScreen').outerHeight(true)
            }, 100);
          self.openMenu();
        }
      });
      $(document).on('scroll touchmove mousewheel', function (e) {
        if ($('#myNav').hasClass('open')) {
          if ($(document).scrollTop() <= $('#app-header .fullScreen').outerHeight(true)) {
            $('body,html').animate({
              scrollTop: $('#app-header .fullScreen').outerHeight(true)
            }, 0);
            e.preventDefault();
            e.stopPropagation();
            return false;
          }
        }
        else return true;

      });

    }
    else{
      var self = this;
      $('#menuBtn').click(function () {
        if ($('#myNav').hasClass('open')) self.closeMenu();
        else self.openMenu();
      });
    }
    if(this.router.url=='/why'){
      this.goToWhy();
    }
    else if(this.router.url=='/howto'){
      this.goToHowTo();
    }
    else if(this.router.url=='/applications'){
      this.goToApplications();
    }
    else if(this.router.url=='/services'){
      this.goToServices();
    }

  }
  showLogin() {
    this.closeMenu();
    this.dialog.ShowLoginDialog();
  }
  showRegister(){
    this.closeMenu();
    this.dialog.ShowRegisterDialog();
  }
  closeMenu(){
    $('body')[0].style.overflow='';
    $('#menuIcon').removeClass('rotateForward');
    $('#menuIcon').addClass('rotateBack');
    this.menuButtonIcon='menu';
    $('#myNav').removeClass('open');
  }
  openMenu(){
    $('body')[0].style.overflow='hidden';
    //$('#menuIcon').attr('svgIcon','close');
    this.menuButtonIcon='expand_close';
    $('#menuIcon').removeClass('rotateBack');
    $('#menuIcon').addClass('rotateForward');
    $('#myNav').addClass('open');
  }
  goToHowTo(){
    this.closeMenu();
    if(this.path=='home')
      this._scrollToService.scrollTo({target:'app-howto',offset:-51,duration:1000,easing:'easeInOutCubic'});
    else
      this.router.navigate(['/howto'],{skipLocationChange:true});
  }
  goToServices(){
    this.closeMenu();
    if(this.path=='home')
      this._scrollToService.scrollTo({target:'app-services',offset:-51,duration:1000,easing:'easeInOutCubic'});
    else
      this.router.navigate(['/services'],{skipLocationChange:true});
  }
  goToWhy(){
    this.closeMenu();
    if(this.path=='home')
      this._scrollToService.scrollTo({target:'app-why',offset:-51,duration:1000,easing:'easeInOutCubic'});
    else
      this.router.navigate(['/why'],{skipLocationChange:true});
  }
  goToApplications(){
    this.closeMenu();
    if(this.path=='home')
      this._scrollToService.scrollTo({target:'app-applications',offset:-51,duration:1000,easing:'easeInOutCubic'});
    else
      this.router.navigate(['/applications'],{skipLocationChange:true});
  }
  goToContact(){
    this.closeMenu();

    if(this.path!='contact') {
      $('body,html').animate({scrollTop: 0 }, 0);
      this.router.navigate(['/contact'], {skipLocationChange: true});
    }
    else
      $('body,html').animate({scrollTop: 0 }, 1000);
  }
  goToAbout(){
    this.closeMenu();

    if(this.path!='about') {
      $('body,html').animate({scrollTop: 0 }, 0);
      this.router.navigate(['/about'], {skipLocationChange: true});
    }
    else
      $('body,html').animate({scrollTop: 0 }, 1000);
  }
  goToHome(){
    this.closeMenu();
    if(this.path=='home')
      this._scrollToService.scrollTo({target:'app-header',duration:1000,easing:'easeInOutCubic'});
    else
      this.router.navigate(['/'],{skipLocationChange:true});
  }
  goToArticles(){
    location.href='/articlelist/';
  }

  ngOnInit() {
  }

}
