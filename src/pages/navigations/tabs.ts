import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { SurveyPage } from '../survey/survey';
import { MyProfilePage } from '../my-profile/my-profile';

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1: any;
    tab2: any;
    tab3: any;

    constructor(public navCtrl: NavController) {
        this.tab1 = HomePage;
        this.tab2 = SurveyPage;
        this.tab3 = MyProfilePage
    }

}
