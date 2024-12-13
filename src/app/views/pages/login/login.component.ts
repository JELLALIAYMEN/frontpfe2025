import { Component } from '@angular/core';
import {LoginService} from '../service'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginform!: FormGroup;
  constructor(private Service : LoginService ,private router: Router) { }


  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
    });
  }
  login(){
    this.Service.login(this.loginform.value).subscribe((res)=>{
      console.log(res)
      if(res.token!=null){
        localStorage.setItem("email", res.email);
        localStorage.setItem("profil", res.profil);
        localStorage.setItem("token", res.token);
        window.alert("coonexion avec succées")
      this.router.navigate(["dashboard"]);
}

    },
    (error) => {
      window.alert("s'il vous plaît vérifier vos informations d'identification");
    })
  }

}
