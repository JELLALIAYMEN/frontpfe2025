import { Component } from '@angular/core';
import { UserService } from '../userservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-affecter',
  templateUrl: './affecter.component.html',
  styleUrls: ['./affecter.component.scss']
})
export class AffecterComponent {
  alluser :any ;
  filteredUsers: any[] = [];
  email:any
  constructor(private service : UserService,private route: ActivatedRoute){}
  ngOnInit(){
    this.email = this.route.snapshot.params['email'];

    this.service.alluser().subscribe((res)=>{
      this.alluser=res;
      this.filteredUsers = this.alluser.filter((user: any) => user.profil === 'Eleve');
      console.log(this.filteredUsers)
    })
  }
archiver(id:any){
  this.service.archiver(id).subscribe((res)=>{
window.alert("vous avez archiver l'utilisateur")  })
}
affecter(emaileleve:any){
  this.service.affecter(this.email,emaileleve).subscribe((res)=>{
    if(res){
      window.alert("Eleve Affecter avec succées")
    }
    else {
      window.alert("Eleve affecter deja")
    }
  },  (error) => window.alert("Eleve affecter deja")
  
  )
}
}
