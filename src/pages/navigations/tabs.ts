import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProductPage } from '../product/product';
import { UsersPage } from '../users/users';

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1 = ProductPage;
    tab2 = UsersPage;

    constructor(public navCtrl: NavController) {

    }

}
