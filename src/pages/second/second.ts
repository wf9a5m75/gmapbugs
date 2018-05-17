import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-second',
  templateUrl: 'second.html'
})
export class SecondPage {

  constructor(public navCtrl: NavController) {
  }

  onButtonClick(evt) {
    this.navCtrl.pop({
      animate: true,
      animation: 'md-transition',
      direction: 'back'
    });
  }

  ionViewDidLoad() {

  }

}
