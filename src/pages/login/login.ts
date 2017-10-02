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

  goTo(): void{
    this.navCtrl.push(TabsPage);
  }
}
