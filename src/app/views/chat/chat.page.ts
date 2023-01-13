import { Component, OnInit } from '@angular/core';
import { IonItem, ModalController } from '@ionic/angular';
import { DataService } from 'src/app/provade/data.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  userToChat: any
  sms={
    ms:""
  }
  Info:any
  constructor(private modal: ModalController, private ds: DataService) { }

  closeModal() {
    this.modal.dismiss();
  }


  ngOnInit() {
    this.userToChat = localStorage.getItem("userToChat");
    this.Info = JSON.parse(localStorage.getItem("globalInfo") as string)
  }

  send(){
    console.log(this.sms.ms);
    this.ds.addMessage({
      user: this.Info.user.id,
      message: this.sms.ms,
      date: new Date().toISOString()
    })
    this.sms.ms = ""
    
  }

}

