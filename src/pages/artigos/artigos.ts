
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from './../home/home';


/**
 * Generated class for the ArtigosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-artigos',
  templateUrl: 'artigos.html',
})
export class ArtigosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtigosPage');
  }
  barraPesquisa():void{
    this.navCtrl.push(HomePage);
    
  }
  searchArtigos():any{


  }

}
