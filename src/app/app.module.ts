import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ProductPage } from '../pages/product/product';
import { UsersPage } from '../pages/users/users';
import { SurveyPage } from '../pages/survey/survey';
import { SurveyCreatePage } from '../pages/survey/create/survey-create';
import { SurveyCreate2Page } from '../pages/survey/create/survey-create-page2';
import { HistoryPage } from '../pages/history/history';
import { TabsPage } from '../pages/navigations/tabs';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    ProductPage,
    UsersPage,
    SurveyPage,
    SurveyCreatePage,
    SurveyCreate2Page,
    HistoryPage,
    LoginPage  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    ProductPage,
    UsersPage,
    SurveyPage,
    SurveyCreatePage,
    SurveyCreate2Page,
    HistoryPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
