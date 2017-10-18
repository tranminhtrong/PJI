import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SurveyDetailChartPage } from '../detail/survey-detail-chart';
import { SurveyCreatePage } from '../create/survey-create';
import { } from '';

@Component({
    selector: 'page-survey-detail',
    templateUrl: 'survey-detail.html'
})
export class SurveyDetailPage {

    header: string;
    answers: any;
    

    constructor(public navCtrl: NavController) {
        this.header = "Poll Question";
        this.answers = [
            { name: "Item 1", checked: false },
            { name: "Item 2", checked: false },
            { name: "Item 3", checked: false },
            { name: "Item 4", checked: false },
        ];
    }

    checkedItem(item) {
        item.checked = item.checked ? false : true;
    }

    goToPollChart(){
        this.navCtrl.push(SurveyDetailChartPage);
    }

    goToEditPage(){
        this.navCtrl.push(SurveyCreatePage);
    }
}
