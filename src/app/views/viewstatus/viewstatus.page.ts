import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-viewstatus',
  templateUrl: './viewstatus.page.html',
  styleUrls: ['./viewstatus.page.scss'],
})
export class ViewstatusPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  previewStauts() {

  }
  nextStatus() {

  }

  ngOnInit() {
  }

}
