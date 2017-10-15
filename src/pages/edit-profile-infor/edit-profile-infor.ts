import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'edit-profile-infor.html',
})
export class EditProfileInfor {
  item;
  isEditPassword: boolean;
  isEditEmail: boolean;

  constructor(params: NavParams) {
    this.isEditPassword = false;
    this.isEditEmail = false;
    this.item = params.data.item;

    switch (this.item.type) {
      case 1:
        this.isEditPassword = true;
        break;
      case 2:
        this.isEditEmail = true;
        break;
    }
  }
}