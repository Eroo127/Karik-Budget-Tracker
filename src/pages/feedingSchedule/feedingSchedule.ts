import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from "../contact/contact";
import { SecurityPage } from "../security/security";

@Component({
  selector: 'page-feedingSchedule',
  templateUrl: 'feedingSchedule.html'
})
export class FeedingSchedulePage {

  contactPage: any;
  securityPage: any;

  constructor(public navCtrl: NavController) {
    this.contactPage = ContactPage;
    this.securityPage = SecurityPage;

  }

}
