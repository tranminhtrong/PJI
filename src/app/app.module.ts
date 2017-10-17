import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ProductPage } from '../pages/product/product';
import { UserRegisterPage } from '../pages/user-register/user-register';
import { SurveyPage } from '../pages/survey/survey';
import { TabsPage } from '../pages/navigations/tabs';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { EditProfileInfor } from '../pages/edit-profile-infor/edit-profile-infor';
import { ManagePage } from '../pages/manage/manage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductPage,
    UserRegisterPage,
    LoginPage,
    SurveyPage,
    TabsPage,
    MyProfilePage,
    EditProfileInfor,
    ManagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductPage,
    UserRegisterPage,
    LoginPage,
    SurveyPage,
    TabsPage,
    MyProfilePage,
    EditProfileInfor,
    ManagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
