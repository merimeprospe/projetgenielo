import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../provade/data.service';
import { globalInfo } from '../login/login.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user={
    email: "",
    password: "",
    username: "",
    role: "",
  }
  users:any
  error: any = false 

  constructor(private ds:DataService, private route:Router) { }
  showToolbar = false;
  ngOnInit() {
    this.ds.getuser().subscribe( res => {
      console.log(res);
      this.users = res;
    })
  }
  register(){
    let isExist = 0
    if( this.user.email && this.user.password && this.user.username){
      console.log("OK2");
      if(this.users != null)
      {
        console.log("OK3");
        this.users.forEach( (el:any) => {
          if(el.username == this.user.username || el.email == this.user.email){
            isExist = 1;
          }
        });
      }
      if(isExist==0){
        console.log("OK4");
        const  n = this.user.password+""
        if(n.length >= 8)
        {
          this.ds.addUser({
            email: this.user.email,
            password: this.user.password,
            username: this.user.username,
            role: "client",
          })
          this.route.navigateByUrl('/login');
        }else{
          this.error="mot de passe trop faible "
        }
      }else{
        this.error="un utilisateur eyant ce non esiste deja"
      }
    }else{
      this.error="saisiser toutes les information de utilisateur"
    }
  }
  close(){
    this.error=false
  }
}
