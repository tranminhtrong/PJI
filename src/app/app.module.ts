import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ChartsModule } from 'ng2-charts';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ProductPage } from '../pages/product/product';
import { UsersPage } from '../pages/users/users';
import { SurveyPage } from '../pages/survey/survey';
import { SurveyCreatePage } from '../pages/survey/create/survey-create';
import { SurveyCreate2Page } from '../pages/survey/create/survey-create-page2';
import { SurveyDetailPage } from '../pages/survey/detail/survey-detail';
import { SurveyDetailChartPage } from '../pages/survey/detail/survey-detail-chart';
import { HistoryPage } from '../pages/history/history';
import { UserRegisterPage } from '../pages/user-register/user-register';
import { TabsPage } from '../pages/navigations/tabs';
import {MyProfilePage} from '../pages/my-profile/my-profile';
import {EditProfileInfor} from '../pages/edit-profile-infor/edit-profile-infor';

import {TimerComponent} from "../components/timer/timer";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductPage,
    SurveyPage,
    SurveyCreatePage,
    SurveyCreate2Page,
    SurveyDetailPage,
    SurveyDetailChartPage,
    HistoryPage,
    TimerComponent,
    LoginPage  
    UserRegisterPage,
    LoginPage,
    TabsPage,
    MyProfilePage,
    EditProfileInfor
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductPage,
    SurveyPage,
    SurveyCreatePage,
    SurveyCreate2Page,
    SurveyDetailPage,
    SurveyDetailChartPage,
    HistoryPage,
    LoginPage
    UserRegisterPage,
    TabsPage,
    MyProfilePage,
    EditProfileInfor
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
