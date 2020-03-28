import {AfterViewInit, Component} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

declare var $: any;


import {WOW} from 'assets/js/wow.min.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {


    iconRegistry.addSvgIcon(
      'visibility_on',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/ic_visibility.svg'));

    iconRegistry.addSvgIcon(
      'visibility_off',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/ic_visibility_off.svg'));

    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/ic_menu.svg'));

    iconRegistry.addSvgIcon(
      'expand_close',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/ic_expand_close.svg'));

    iconRegistry.addSvgIcon(
      'mail',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/ic_email.svg'));

    iconRegistry.addSvgIcon(
      'call',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/ic_call_black_24px.svg'));

    iconRegistry.addSvgIcon(
      'check',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/check.svg'));

    iconRegistry.addSvgIcon(
      'warning',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/baseline-error-24px.svg'));


  }

  ngAfterViewInit() {
    new WOW().init();
  }

}
