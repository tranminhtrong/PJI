import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SurveyCreate2Page } from '../create/survey-create-page2';
import { } from '';

@Component({
  selector: 'page-survey-create',
  templateUrl: 'survey-create.html'
})
export class SurveyCreatePage {

  answers: any;
  showNextButton: boolean = false;

  constructor(public navCtrl: NavController) {
    this.answers = ['item1', 'item2', 'item3', 'item4'];

  }

  createAnswer() {
    this.answers.push("item" + (this.answers.length + 1));
    this.showNextButton = false;
  }

  deleteAnswer(index) {
    this.answers.splice(index, 1);
    // Check exits answer
    if (this.answers.length == 0)
      this.showNextButton = true;
  }

  nextPage() {
    this.navCtrl.push(SurveyCreate2Page);
  }
}
