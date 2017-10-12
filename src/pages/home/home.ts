import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { CreateAccount } from '../create-account/create-account';
import { TabsPage } from '../navigations/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goTo(): void {
    this.navCtrl.push(LoginPage);
  }

  goToCreateAccount(): void {
    this.navCtrl.push(CreateAccount);
  }

  goToTabsPage():void{
    this.navCtrl.push(TabsPage);
  }
}
