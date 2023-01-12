import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { DataService, User } from 'src/app/provade/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @Input() id: string | undefined;
  user!: User; 
  constructor( private ds: DataService, private modalCtrl:ModalController, private toastCtrl: ToastController) {
    
   }

  async ngOnInit() {
    
    
     await this.ds.getUserById(this.id).subscribe(
      res => {
        this.user = res
      }
      )
  }

  async updateUser(){
    console.log(this.user);
    
    this.ds.updateUser(this.user);
    const toast = await this.toastCtrl.create({
      message: 'User modifier',
      duration: 1000
    });
    toast.prepend();
  }

  async deleteUser(){
    await this.ds.deleteUser(this.user)
    this.modalCtrl.dismiss
  }

}
