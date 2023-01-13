import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-addstatus',
  templateUrl: './addstatus.page.html',
  styleUrls: ['./addstatus.page.scss'],
})
export class AddstatusPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}
