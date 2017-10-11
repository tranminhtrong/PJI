import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-survey',
    templateUrl: 'survey.html'
  })
export class SurveyPage {
    constructor(public navCtrl: NavController) {
    // Id is 2, nav refers to Tab2
    console.log(this.navCtrl.id)
    }
}