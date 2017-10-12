import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../navigations/tabs';

@Component({
    selector: 'page-create-account',
    templateUrl: 'create-account.html'
  })
  export class CreateAccount{
    constructor(public navCtrl: NavController) {
        
    }


    goToTabsPage():void{
      this.navCtrl.push(TabsPage);
    }
  }