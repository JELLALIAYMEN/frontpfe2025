import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service';

@Component({
  selector: 'app-envoyer-mail',
  templateUrl: './envoyer-mail.component.html',
  styleUrls: ['./envoyer-mail.component.scss']
})
export class EnvoyerMailComponent {
  loginform!: FormGroup;
  constructor(private Service : LoginService ,private router: Router) { }


  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
    });
  }
  envoyer(){
    this.Service.verifieremail(this.loginform.value.email).subscribe((res)=>{
      console.log(res)
    })
    /*this.Service.envoyeremail(this.loginform.value.email).subscribe((res)=>{
      window.alert("verifier la boite mail")
      this.router.navigate(["login"]);
    })*/
  }
}
