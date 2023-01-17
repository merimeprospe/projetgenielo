import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DisplayjobPage } from '../displayjob/displayjob.page';

@Component({
  selector: 'app-joboffer',
  templateUrl: './joboffer.page.html',
  styleUrls: ['./joboffer.page.scss'],
})
export class JobofferPage implements OnInit {

  constructor(private modal: ModalController) { }

  async openJob() {
    const modal = await this.modal.create({
      component: DisplayjobPage,
    });

    await modal.present();

  }

  openChat() {

  }

  ngOnInit() {
  }

}
