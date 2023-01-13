import { Component, OnInit } from '@angular/core';
import { IonItem, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  userToChat: any

  constructor(private modal: ModalController) { }

  closeModal() {
    this.modal.dismiss();
  }


  ngOnInit() {
    this.userToChat = localStorage.getItem("userToChat");

  }

}

