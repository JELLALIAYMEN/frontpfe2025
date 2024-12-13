import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service';

@Component({
  selector: 'app-nouveau-password',
  templateUrl: './nouveau-password.component.html',
  styleUrls: ['./nouveau-password.component.scss']
})
export class NouveauPasswordComponent {
  loginform!: FormGroup;
  id:any;
  constructor(private Service : LoginService ,private route :ActivatedRoute,private router: Router) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
console.log(this.id)
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
      this.router.navigate(["dashboard"]);
}

    },
    (error) => {
      window.alert("s'il vous plaît vérifier vos informations d'identification");
    })
  }


}
