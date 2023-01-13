import { IonModal } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.page.html',
  styleUrls: ['./newpost.page.scss'],
})
export class NewpostPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal | any

  constructor() { }

  async getImage(){
    // const image=await 
    /*Camera.getPhoto({
      quality:90,
      allowEditing: true,
      resultType: CameraResultType.Base64
    }).then((Base64string) =>{
      alert("base64 of captured image = "+ Base64string);
      var ob = {
        user:"h0lcTCdha3Re7YCtqTBt",
        file:"data:image/png;base64,"+Base64string
      }
      var reference = this;
      this.loader.create({
        message:"saving to firebase realtime database"
      }).then((loadingElement) => {
        loadingElement.present();
        firebase.database().ref('/image').set(ob).subscribe((res: any) => {
          console.log("rdefdyffdyfcyfcyfycfecefcyefcyfeycfeyfcyefcyeffdyfdywfdywqfdywq",res);
          this.filesave = res;
        }).then(function(error: any){
          if(error){

          }else{
            alert("saved")
          }
        })
      })
    },(err)=>{
      alert(JSON.stringify(err));
    }) */
    
    const image=await Camera.getPhoto({
      quality:90,
      allowEditing: true,
      resultType: CameraResultType.Base64
    })
    var imageUri = "data:image/"+image.format+";base64,"+image.base64String;
    console.log(imageUri);
    alert("base64 of captured image = "+ imageUri);
    var ob = {
      user:"h0lcTCdha3Re7YCtqTBt",
      file:"data:image/png;base64,"+imageUri
    }
    // var reference = this;
    // this.loader.create({
    //   message:"saving to firebase realtime database"
    // }).then(async (loadingElement) => {
    //   loadingElement.present();
    //   await firebase.database().ref('/image').set(ob).then(function(error: any){
    //     if(error){

    //     }else{
    //       alert("saved")
    //     }
    //   })
    // })
  }

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
