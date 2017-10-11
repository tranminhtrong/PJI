import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../navigations/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

  goTo(event, item): void{
    this.navCtrl.push(TabsPage, {
      item: item
    });
    // this.navCtrl.push(HomePage);
    //this.navCtrl.setRoot(HomePage);
  }
}
