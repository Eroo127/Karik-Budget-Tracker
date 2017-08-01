import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListPage } from "../list/list";
import { IncomePage } from "../income/income";

@Component({
  selector: 'page-feeding',
  templateUrl: 'feeding.html'
})
export class FeedingPage {

   listPage: any;
  incomePage: any;

feedingSchedulePage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listPage = ListPage;
    this.incomePage = IncomePage;

  }

}
