import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-supply-third',
  templateUrl: 'supply-third.html'
})
export class SupplyThirdPage {

  selectedVaruInfo: any; //from previous page
  supplies: any; //current things
  supplyTitle: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedVaruInfo = navParams.get('supply');
    this.supplyTitle = navParams.get('supplyTitle');
  }
}
