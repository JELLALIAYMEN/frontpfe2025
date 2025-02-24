import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditService } from 'src/app/services/credit.service';

@Component({
  selector: 'app-gestion-credit',
  templateUrl: './gestion-credit.component.html',
  styleUrls: ['./gestion-credit.component.scss']
})
export class GestionCreditComponent {
  allcredit:any ;
  creditbymat :any ;

  creditbyclasse :any ;
  aff1:boolean =false ;
  aff2:boolean =false ;
  aff3:boolean =false ;
  total:any ;
  allclasse:any ;
  classeForm!:FormGroup ;

  mattForm!:FormGroup ;
constructor(private service:CreditService,private fb: FormBuilder){}
ngOnInit(){

  this.service.allclasse().subscribe((res)=>{
    this.allclasse=res ; 
  })
  this.classeForm = this.fb.group({
    nomclasse: [null, [Validators.required]], 
  });
   this.mattForm = this.fb.group({
        matricule: [null, [Validators.required]], 
      });
      this.service.affichercredit().subscribe((res) => {
        this.allcredit = res; // Stocker les données dans allcredit
      
        // Calcul du total en additionnant les valeurs de prix
        this.total = this.allcredit.reduce((acc:any, credit:any) => acc + (credit.prix || 0), 0);
      
      });
      

}
affiche1(){
  this.aff1=true ;
  this.aff2=false ;
  
this.service.afficherbymatricule(this.mattForm.value.matricule).subscribe((res)=>{
this.creditbymat=res ;
this.total = this.creditbymat.reduce((acc:any, credit:any) => acc + (credit.prix || 0), 0);

})
}
affiche2(){
  this.aff2=true ;
  this.aff1=false ;
  
  this.service.afficherbyclasse(this.classeForm.value.nomclasse).subscribe((res)=>{
this.creditbyclasse=res ;
this.total = this.creditbyclasse.reduce((acc:any, credit:any) => acc + (credit.prix || 0), 0);

})
}
}
