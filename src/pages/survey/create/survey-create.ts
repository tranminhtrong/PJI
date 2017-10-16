import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {} from '';

@Component({
  selector: 'page-survey-create',
  templateUrl: 'survey-create.html'
})
export class SurveyCreatePage {

  answers:any;

  constructor(public navCtrl: NavController) {
    this.answers = ['item1','item2','item3','item4'];
  }

  createAnswer() {
    this.answers.push("item"+(this.answers.length+1));
  }

  deleteAnswer(index) {
    this.answers.splice(index, 1);
  }
}
