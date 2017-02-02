import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { SupplyThirdPage } from '../supply-third/supply-third';


@Component({
  selector: 'page-supply-second',
  templateUrl: 'supply-second.html'
})
export class SupplySecondPage {

  selectedVarud: any; //from previous page
  supplies: any; //current things
  supplyTitle: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedVarud = navParams.get('item');

    this.supplies = [
      {title: 'Joogivesi (21 liitrit)'},
      {title: 'Erinevaid konserve (2,5 kg)'},
      {title: 'Pakisupid, püreed, helbed'},
      {title: 'Valmis purgiroad'},
      {title: 'Teraviljatooted'},
      {title: 'Süsivesikuterikkad tooted'},
      {title: 'Esmaabitarbed ja olulised ravimid'},
      {title: 'Taskulamp ja patareid'},
      {title: 'Patareidega raadio ja varupatareid'},
      {title: 'Teraviljatooted'},
      {title: 'Süsivesikuterikkad tooted'},
      {title: 'Joovivesi (21 liitrit)'}
    ];
  }

  varudTapped(event, supply) {
    this.navCtrl.push(SupplyThirdPage, {
      supply: supply,
      supplyTitle: this.selectedVarud.title
    });
  }
}
