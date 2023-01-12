import { IonModal } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.page.html',
  styleUrls: ['./newpost.page.scss'],
})
export class NewpostPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal | any

  constructor() { }


  closeModal() {
    this.modal.dismiss();
  }
  closeModal1() {
    this.modal.dismiss();
  }
  closeModal2() {
    this.modal.dismiss();
  }

  ngOnInit() {
  }

  addPost(){
    
  }

}
