import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.scss']
})
export class CreateMenuComponent {
  menuForm: FormGroup;
  typemenuOptions = ['Apporter', 'Reserver'];
  joursOptions = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,
    private snackBar: MatSnackBar // Inject MatSnackBar
  ) {
    this.menuForm = this.fb.group({
      typemenu: ['', Validators.required],
      platentree: ['', Validators.required],
      platprincipale: ['', Validators.required],
      dessert: ['', Validators.required],
      nomjour: ['', Validators.required],
      datedeb: ['', Validators.required],
      datefin: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.menuForm.valid) {
      this.menuService.ajouterMenu(this.menuForm.value).subscribe({
        next: () => {
          this.showSnackBar('Menu ajouté avec succès !', 'success');
        },
        error: () => {
          this.showSnackBar('Erreur lors de l\'ajout du menu.', 'error');
        }
      });
    } else {
      this.showSnackBar('Veuillez remplir tous les champs requis.', 'warning');
    }
  }

  private showSnackBar(message: string, type: string) {
    this.snackBar.open(message, 'Fermer', {
      duration: 3000,
      panelClass: `snackbar-${type}` // Custom CSS class for different types
    });
  }
}
