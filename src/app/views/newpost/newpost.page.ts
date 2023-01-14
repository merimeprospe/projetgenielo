import { IonModal } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Camera,CameraResultType }   from '@capacitor/camera';
import { DataService } from 'src/app/provade/data.service';
import { globalInfo } from 'src/app/login/login.page'; 
import { parse } from 'path';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.page.html',
  styleUrls: ['./newpost.page.scss'],
})
export class NewpostPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal | any
  file:any
  p={
    contenu: "",
    titre: ""
  }
  Info:any
  post:any
  constructor(private ds: DataService,) { 
    ds.getPublication().subscribe(res => {
      console.log(res);
      this.post = res;
    })
  }

  async getImage(){
    const image=await Camera.getPhoto({
      quality:90,
      allowEditing: true,
      resultType: CameraResultType.Base64
    })
    
    this.file = "data:image/"+image.format+";base64,"+image.base64String;
    console.log(this.file);
     
  }
  ngOnInit() {
    this.Info = JSON.parse(localStorage.getItem("globalInfo") as string)
  }
  newpost(ob:any){
    this.p.contenu = ob.target.value;
  }
  newpost2(ob:any){
    this.p.titre = ob.target.value;
  }
  newpost1(ob:any){
    this.file = ob.target.value;
    console.log(this.file);
    
  }
  addPost(){
    console.log(this.Info);
    this.ds.addPublication({
      titre: this.p.titre,
      user: this.Info.user.id,
      Contenu: this.p.contenu,
      file: this.file,
      date: new Date(),
      num: this.post.length
    })
    this.ds.addImage({
      file: this.file,
      user: this.Info.user.id
    })
    console.log("ok");
    this.file= null
  }
  closeModal(){
    this.modal.dismiss();
  }

}
