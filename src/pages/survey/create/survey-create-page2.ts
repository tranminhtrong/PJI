import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { } from '';

@Component({
  selector: 'page-survey-create-page2',
  templateUrl: 'survey-create-page2.html'
})
export class SurveyCreate2Page {

  allowChecked: boolean = false;
  includeChecked: boolean = true;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  change(item) {
    if (item) {
      let prompt = this.alertCtrl.create({
        title: '',
        message: "Maximum number of items that can be selected? ",
        inputs: [
          {
            name: 'Number',
            placeholder: '0'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              this.allowChecked = false;
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: data => {
              console.log('Saved clicked');
            }
          }
        ]
      });
      prompt.present();
    }
  }
}
