import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeworkServiceService } from 'src/app/services/HomeworkServiceService';
import { ModuleService } from 'src/app/services/ModuleService';
import { AddModuleComponent } from '../add-module/add-module.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asseigner-homework',
  templateUrl: './asseigner-homeword.component.html',
  styleUrls: ['./asseigner-homeword.component.scss']
})
export class AssaignerHomeworkComponent  {
  travailleForm!: FormGroup;
   id:any ;
     constructor(
       private service: ModuleService,
       private fb: FormBuilder,
       private router : ActivatedRoute
     ) {}
   
     ngOnInit(): void {
      this.id= this.router.snapshot.paramMap.get('id')
       this.travailleForm = this.fb.group({
         email: ['', [Validators.required]],
       });
   
       console.log('Formulaire initialisé');
     }
   
     envoyer() {
      this.service.envoyertravaille(this.travailleForm.value.email,this.id).subscribe((res)=>{
        window.alert("Travaille Envoyer Avec succées")
      })
      
     }
   
   
     // Accesseurs pour éviter les erreurs de typage dans le HTML
     get email() { return this.travailleForm.get('email'); }
   
   }