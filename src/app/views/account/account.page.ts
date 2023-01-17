import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  user_note: number = 3;
  get_user_note: number = 1;
  progress1: number = 75
  progress2: number = 12
  progress3: number = 50
  red: any = "red"
  yellow: any = "red"
  green: any = "red"
  constructor() { }


  selectStart(item: any) {
    this.get_user_note = item
  }
  ngOnInit() {
  }

}
