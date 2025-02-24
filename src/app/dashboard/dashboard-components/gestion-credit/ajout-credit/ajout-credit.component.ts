import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CreditService } from 'src/app/services/credit.service';
import { PaiementService } from 'src/app/services/paiement.service';
import { TypePaiementService } from 'src/app/services/typepaiementservice';

@Component({
  selector: 'app-ajout-credit',
  templateUrl: './ajout-credit.component.html',
  styleUrls: ['./ajout-credit.component.scss']
})
export class AjoutCreditComponent {
  payementForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  loading: boolean = false;
  alltype:any ;
  modepayOptions = ['Mensiel', 'Annuel', 'Trimestre'];
  modalitePayOptions = ['CASH', 'CHECK', 'ONLINE'];
  typepayOptions = ['Scolaire', 'Cantine'];
  statuspayOptions = ['enattente', 'réussie', 'FAILED'];
  trimestreOptions = ['Trimestre1', 'Trimestre2', 'Trimestre3'];
  id:any  ; 
  constructor(private fb: FormBuilder, private payementService: PaiementService,private router : ActivatedRoute
    ,private typeservice :TypePaiementService,private service:CreditService
  ) {
    this.payementForm = this.fb.group({
      matricule: [null, [Validators.required]], 
      type: ['', Validators.required],
 
    });
  }


ngOnInit(){
  this.typeservice.afficherTypePaiement().subscribe((res)=>{
    this.alltype=res
  })
  this.id= this.router.snapshot.paramMap.get('id');
  

}




  // Fonction d'affichage des messages d'erreur pour un champ donné
  getErrorMessage(fieldName: string): string | null {
    const field = this.payementForm.get(fieldName);

    if (field?.hasError('required')) {
      return 'Ce champ est requis.';
    }
    if (field?.hasError('min')) {
      return 'Le montant doit être supérieur à zéro.';
    }
    return null;
  }

  onSubmit() {
    console.log(this.payementForm.value)
    if (this.payementForm.valid) {
      this.loading = true;  // Affichage du loader

      this.service.ajoutcredit(this.payementForm.value.type,this.payementForm.value.matricule).subscribe({
        next: (response) => {
          this.successMessage = 'Crédit enregistré avec succès.';
          this.errorMessage = null;
          this.loading = false;  
          console.log('Réponse du serveur :', response);
        },
        error: (error) => {
          this.successMessage = null;
          this.errorMessage = error;
          this.loading = false;  
          console.error('Erreur:', error);
        },
      });
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs requis.';
      this.successMessage = null;
    }
  }

}
