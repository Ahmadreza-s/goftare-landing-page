import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {PsychologistsComponent} from './psychologists/psychologists.component';
import {CommentsComponent} from './comments/comments.component';
import {HowtoComponent} from './howto/howto.component';
import {ServicesComponent} from './services/services.component';
import {WhyComponent} from './why/why.component';
import {ApplicationsComponent} from './applications/applications.component';
import {FooterComponent} from './footer/footer.component';


import {ModalModule} from 'ngx-bootstrap';
import {RegisterFormComponent} from './register-form/register-form.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {DialogService} from './_services/dialog.service';
import {MatIconModule} from '@angular/material';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {RouterModule, Routes} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {ForgetpasswordFormComponent} from './forgetpassword-form/forgetpassword-form.component';
import {RecoveryPasswordComponent} from './recovery-password/recovery-password.component';
import {AlertDialogComponent} from './alert-dialog/alert-dialog.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'howto', component: HomeComponent},
  {path: 'services', component: HomeComponent},
  {path: 'why', component: HomeComponent},
  {path: 'applications', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'recoverypassword/:token', component: RecoveryPasswordComponent},
  {path: '**', redirectTo: ''}
];


@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    LoginFormComponent,
    HeaderComponent,
    PsychologistsComponent,
    CommentsComponent,
    HowtoComponent,
    ServicesComponent,
    WhyComponent,
    ApplicationsComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    ForgetpasswordFormComponent,
    RecoveryPasswordComponent,
    AlertDialogComponent


  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ScrollToModule.forRoot(),
    HttpClientModule

  ],
  providers: [
    DialogService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    RegisterFormComponent,
    LoginFormComponent,
    ForgetpasswordFormComponent,
    AlertDialogComponent
  ]
})
export class AppModule {
}
