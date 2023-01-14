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
  mess:any
  ms:any
  message:any[]=[]
  messages:any[]=[]
  constructor(private modal: ModalController, private ds: DataService,) { 
    ds.getmes().subscribe(res => {
      console.log(res);
      this.mess = res;
    })
    ds.getmessage().subscribe(res => {
      this.message = []
      this.messages = []
      this.ms = res;
      this.ms.forEach((el:any) => {
        if (el.mes=="h0lcTCdha3Re7YCtqTBtAppO6ihmlNjCFaBG2X6j") {
          this.message.push(el)
        }
      });
      for (let i = 0; i < this.message.length-1; i++) {
        for (let j = i; j < this.message.length; j++) {
          if (this.message[i].num > this.message[j].num) {
            this.messages[0]=this.message[i]
            this.message[i]=this.message[j]
            this.message[j]= this.messages[0]
            
          }
        }
      }
      console.log(this.message);
    })
  }
  closeModal() {
    this.modal.dismiss();
  }
  ngOnInit() {
    this.userToChat = localStorage.getItem("userToChat");
    this.Info = JSON.parse(localStorage.getItem("globalInfo") as string)
    console.log(this.Info);
    
  }

  send(){
    let isOk =0
    let m = ""
    this.mess.forEach((el:any) => {
      console.log(el.user1 = this.Info.user.id && el.user2 == "AppO6ihmlNjCFaBG2X6j");
      if (el.user1 = this.Info.user.id && el.user2 == "AppO6ihmlNjCFaBG2X6j")  {
        isOk = 1
        m=el.mes
      }
    });
    if (isOk==0) {
      this.ds.addMess({
        user1: this.Info.user.id,
        message: this.sms.ms,
        mes: this.Info.user.id+"AppO6ihmlNjCFaBG2X6j",
        user2: "AppO6ihmlNjCFaBG2X6j"
      })
      m=this.Info.user.id+"AppO6ihmlNjCFaBG2X6j"
    }
    
    this.ds.addMessage({
      user: this.Info.user.id,
      num: this.message.length,
      message: this.sms.ms,
      userto: "AppO6ihmlNjCFaBG2X6j",
      mes: m,
      date: new Date().toISOString()
    })
    console.log(this.sms.ms);
    this.sms.ms = ""
    
  }

}

