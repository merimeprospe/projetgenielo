import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/provade/data.service';

@Component({
  selector: 'app-listchat',
  templateUrl: './listchat.page.html',
  styleUrls: ['./listchat.page.scss'],
})
export class ListchatPage implements OnInit {

  Info:any
  mess:any
  conversation:any[]= []
  userToChat = {
    "id":'1',
    "name":"Black M",
    "img":"assets/img/blackM.jpg"
  }
  
  constructor( private ds: DataService,) { 
    ds.getmes().subscribe(res => {
      console.log(res);
      this.mess = res;
      this.mess.forEach((el:any) => {
        if (el.user1==this.Info.user.id || el.user2==this.Info.user.id) {
          this.conversation.push(el)
        }
      });
      console.log(this.conversation);
    })
  }

  openChat(){
    
  }

  ngOnInit() {
    this.Info = JSON.parse(localStorage.getItem("globalInfo") as string)
  }

}
