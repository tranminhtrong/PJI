import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProductPage } from '../product/product';
import { UsersPage } from '../users/users';
import { SurveyPage } from '../survey/survey';
import { HistoryPage } from '../history/history';

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1 = ProductPage;
    tab2 = SurveyPage;
    tab3 = HistoryPage;
    tab4 = UsersPage;

    constructor(public navCtrl: NavController) {

    }

}
