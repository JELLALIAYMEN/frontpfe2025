import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-modifer-menu',
  templateUrl: './modifer-menu.component.html',
  styleUrls: ['./modifer-menu.component.scss']
})
export class ModiferMenuComponent {
  menuForm: FormGroup;
  typemenuOptions = ['Apporter', 'Reserver'];
  joursOptions = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,  
    public dialogRef: MatDialogRef<ModiferMenuComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any 
  ) {
    this.menuForm = this.fb.group({
      typemenu: [this.data.typemenu],
      platentree: [this.data.platentree],
      platprincipale: [this.data.platprincipale],
      dessert: [this.data.dessert],
      nomjour: [this.data.nomjour],
      datedeb: [this.formatDate(this.data.datedeb)],
      datefin: [this.formatDate(this.data.datefin)]
    });
  }

  // Méthode pour formater la date en YYYY-MM-DD (sans heure, pour éviter les problèmes de fuseau horaire)
  formatDate(date: any): string {
    if (!date) return '';
    const localDate = new Date(date);
    return localDate.toLocaleDateString('en-CA'); // Format 'YYYY-MM-DD'
  }

  onSave(): void {
    const updatedMenu = this.menuForm.value;

    // Convertir les dates en format YYYY-MM-DD sans l'heure avant d'envoyer au backend
    updatedMenu.datedeb = this.formatDate(updatedMenu.datedeb);
    updatedMenu.datefin = this.formatDate(updatedMenu.datefin);

    this.menuService.updateMenu(this.data.id, updatedMenu).subscribe(
      (response) => {
        console.log('Menu mis à jour:', response);
        this.dialogRef.close();
      },
      (error) => {
        console.error('Erreur lors de la mise à jour:', error);
      }
    );
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
