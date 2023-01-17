import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DisplaynotifPage } from '../displaynotif/displaynotif.page';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  constructor(private modal: ModalController) { }

  async openNotif() {
    const modal = await this.modal.create({
      component: DisplaynotifPage,
    });

    await modal.present();

  }
  
  ngOnInit() {
  }

}
