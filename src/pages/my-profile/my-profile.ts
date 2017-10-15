import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {EditProfileInfor} from '../edit-profile-infor/edit-profile-infor';




@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html'
})
export class MyProfilePage {
   username: string;
  // email: string;
  // constructor() {
    // this.username = "ttran229";
    // this.email = "ttran229@csc.com";
  // }

  items = [];
  constructor(public nav: NavController) {
    this.username = "ttran229";
    this.items = [
      {
        'title': 'Edit Password',
        'type': 1
      },
      {
        'title': 'Edit Email',
        'type': 2
      }
    ]
  }

  openNavDetailsPage(item) {
    this.nav.push(EditProfileInfor, { item: item });
  }
}
