import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FeedingSchedulePage } from "../feedingSchedule/feedingSchedule";
import { FeedingPage } from "../feeding/feeding";
import { SecurityPage } from "../security/security";
import { AboutPage } from "../about/about";
import { ContactPage } from "../contact/contact";
import { IncomePage } from "../income/income";
import {GoalPage} from "../goal/goal";
import {PaymentsPage} from "../payments/payments";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  securityPage: any;
feedingPage: any;
goalPage:any;
paymentPage:any;
aboutPage:any;
contactPage:any;
feedingSchedulePage:any;
incomePage:any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.feedingPage = FeedingPage;
  this.securityPage = SecurityPage;
  this.goalPage = GoalPage;
  this.paymentPage = PaymentsPage;
  this.aboutPage = AboutPage;
  this.feedingSchedulePage = FeedingSchedulePage;
  this.contactPage = ContactPage;
  this.incomePage = IncomePage;


  }

}
