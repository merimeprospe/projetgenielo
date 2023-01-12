import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
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
    }
    
  }

}
