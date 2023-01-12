import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { type } from 'os';
import { DataService } from '../provade/data.service';
import { RegisterPage } from '../view/register/register.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Users:any
  constructor(private ds:DataService, private alertCtrl: AlertController, private modalCtrl: ModalController) {
  //   ds.getuser().subscribe( res => {
  //     console.log(res);
  //     this.Users = res;
  // })
  }

  healt_icon: string = "outline";
  isCommentActive: boolean = false
  
  whislist() {
    if ( this.healt_icon == "sharp") {
      this.healt_icon = "outline"
    } else {
      this.healt_icon = "sharp"
    }
  }

  Comment(){
    if ( this.isCommentActive == false) {
      this.isCommentActive = true
    } else {
      this.isCommentActive = false
    }}
    
  async openUsere(user: any){
    const modal = await this.modalCtrl.create({
      component: RegisterPage,
      componentProps: { id: user.id},
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.5
    });
    await modal.present();
  }
  async addUser(){
    const alert = await this.alertCtrl.create({
      header: 'Add Note',
      inputs: [
        {
          name: 'username',
          placeholder: 'username',
          type: 'text'
        },
        {
          name: 'email',
          placeholder: 'email',
          type: 'text'
        },
        {
          name: 'password',
          placeholder: 'password',
          type: 'text'
        }
      ],
      buttons:[
        {
          text: 'Cancel',
          role: 'Cancel'
        },
        {
          text: 'Add',
          handler: (res) => {

            // this.ds.addUser({
            //   username: res.username,
            //   email: res.email,
            //   password: res.password,
            //   role: "client_simple"
            // })
          }
        }
      ]
    });
    await alert.present();
  }

}
