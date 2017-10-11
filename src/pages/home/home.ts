import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';

import { SurveyPage } from '../survey/survey';
import { UsersPage } from '../users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1: any;
  tab2: any;

  constructor() {
    this.tab1 = SurveyPage;
    this.tab2 = UsersPage;
  }
}
