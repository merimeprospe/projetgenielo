import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { type } from 'os';
import { DataService } from '../provade/data.service';
import { RegisterPage } from '../view/register/register.page';
import { AddstatusPage } from '../views/addstatus/addstatus.page';
import { ViewstatusPage } from '../views/viewstatus/viewstatus.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  Users: any
  Info: any
  com: any
  comment: any
  con={}
  constructor(private ds: DataService, private alertCtrl: AlertController, private modalCtrl: ModalController) {
    ds.getPublication().subscribe(res => {
      console.log(res);
      this.Users = res;
      this.Users.forEach((el: any) => {
        el.comm = false
      });
      console.log("fffdf fdtddddddddddddddd",this.Users);
    })
    ds.getComment().subscribe(res => {
      console.log(res);
      this.comment = res;
      for (let i = 0; i < this.comment.length-1; i++) {
        for (let j = i; j < this.comment.length; j++) {
          if (this.comment[i].num > this.comment[j].num) {
            this.con=this.comment[i]
            this.comment[i]=this.comment[j]
            this.comment[j]= this.con
          }
        }
      }
    })
  }
  ngOnInit() {
    this.Info = JSON.parse(localStorage.getItem("globalInfo") as string)
  }
  healt_icon: string = "outline";
  isCommentActive: boolean = false

  async openViewStatus() {
    const modal = await this.modalCtrl.create({
      component: ViewstatusPage
    });
    await modal.present();
  }
  
  async openAddStatus() {
    const modal = await this.modalCtrl.create({
      component: AddstatusPage
    });
    await modal.present();
  }

  send(od:any){
    this.ds.addComment({
      user: this.Info.user.id,
      num: this.comment.length,
      message: this.com,
      post: od,
      date: new Date().toISOString()
    })
  }

  whislist() {
    if (this.healt_icon == "sharp") {
      this.healt_icon = "outline"
    } else {
      this.healt_icon = "sharp"
    }
  }

  Comment() {
    if (this.isCommentActive == false) {
      this.isCommentActive = true
    } else {
      this.isCommentActive = false
    }
  }
  Commentid(ob:any) {
    this.Users.forEach((el: any) => {
     if(el.id==ob.id){
       if (el.comm == false) {
        el.comm = true
       } else {
        el.comm = false
       }
     }
    });
  }

  async openUsere(user: any) {
    const modal = await this.modalCtrl.create({
      component: RegisterPage,
      componentProps: { id: user.id },
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.5
    });
    await modal.present();
  }
  async addUser() {
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
      buttons: [
        {
          text: 'Cancel',
          role: 'Cancel'
        },
        {
          text: 'Add',
          handler: (res) => {

            this.ds.addUser({
              username: res.username,
              email: res.email,
              password: res.password,
              role: "client_simple"

            })
          }
        }
      ]
    });
    await alert.present();
  }

}
