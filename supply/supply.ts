import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { SupplySecondPage } from '../supply-second/supply-second';

@Component({
  selector: 'page-supply',
  templateUrl: 'supply.html'
})
export class SupplyPage {

  // selectedVarud: any;
  items: any;

  //teksti suuruse test:
  text: string = 'Juhendid';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // test list
    // this.selectedVarud = navParams.get('item');

    this.items = [
      {title: '7 päeva kodused varud', icon: 'esmaabi'},
      {title: 'Evakuatsioonivarud', icon: 'tuleohutus'},
      {title: 'Meditsiinivarud', icon: 'veeohutus'},
      {title: 'Lemmikloomale', icon: 'looduskeskkond'},
      {title: 'Lastele', icon: 'loodusonnetus'}
    ];

  }
  itemTapped(event, item) {
    this.navCtrl.push(SupplySecondPage, {
      item: item
    });
  }

}
