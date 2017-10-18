import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {SurveyCreatePage} from '../survey/create/survey-create';
import {SurveyDetailPage} from '../survey/detail/survey-detail';

@Component({
  selector: 'page-survey',
  templateUrl: 'survey.html'
})
export class SurveyPage {

  constructor(public navCtrl: NavController) {

  }

  create(): void{
    this.navCtrl.push(SurveyCreatePage);
  }

  goToDetailPage(): void{
    this.navCtrl.push(SurveyDetailPage);
  }
}
