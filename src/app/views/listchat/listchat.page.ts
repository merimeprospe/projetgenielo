import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listchat',
  templateUrl: './listchat.page.html',
  styleUrls: ['./listchat.page.scss'],
})
export class ListchatPage implements OnInit {

  userToChat = {
    "id":'1',
    "name":"Black M",
    "img":"assets/img/blackM.jpg"
  }
  
  constructor() { }

  openChat(){
    
  }

  ngOnInit() {
  }

}
