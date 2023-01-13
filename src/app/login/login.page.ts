import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../provade/data.service';

export let globalInfo = {
  user: null
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user={
    email:"",
    password:""
  }
  users:any
  error: any = false 
  constructor(private ds:DataService, private route:Router) { }

  ngOnInit() {
    this.ds.getuser().subscribe( res => {
      console.log(res);
      this.users = res;
    })
  }

  connection(){
    let i = 0
    if(this.user.email)
    {
      this.users.forEach( (el:any) => {
        if(el.email == this.user.email){
          i=1
          if(el.password == this.user.password)
          {
            globalInfo.user = el 
            this.route.navigateByUrl('/home');
          }
          else{
            this.error="mot de passe incorret"
          }
        }
      });
    }else{
      i = 1
      this.error="completer les information de connection"
    }
    if(i==0)
    {
      this.error="l'untilisateur n'esiste pas"
    }
    console.log(globalInfo.user);
  }

}
