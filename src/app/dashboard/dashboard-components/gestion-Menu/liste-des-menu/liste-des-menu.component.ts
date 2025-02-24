import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuService } from 'src/app/services/menu.service';
import { ModiferMenuComponent } from '../modifer-menu/modifer-menu.component';

@Component({
  selector: 'app-liste-des-menu',
  templateUrl: './liste-des-menu.component.html',
  styleUrls: ['./liste-des-menu.component.scss']
})
export class ListeDesMenuComponent implements OnInit {
  menus: any[] = [];
  displayedColumns: string[] = ['typemenu', 'platentree', 'platprincipale', 'dessert', 'nomjour', 'datedeb', 'datefin', 'action'];
  selectedDate: Date = new Date();  // Set default selected date

  constructor(private menuService: MenuService, private dialog: MatDialog) {}

  ngOnInit(): void {
    // Initialiser avec tous les menus
    this.getAllMenus();
  }

  // Méthode pour récupérer tous les menus
  getAllMenus(): void {
    this.menuService.afficherMenus().subscribe({
      next: (data) => {
        this.menus = data;
        console.log(this.menus,"---")
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des menus', err);
      }
    });
  }

  // Méthode pour récupérer les menus en fonction de la date sélectionnée
  getMenusByDate(): void {
    if (this.selectedDate) {
      const selectedDate = new Date(this.selectedDate);
      this.menuService.getMenusByDate(selectedDate).subscribe({
        next: (data) => {
          this.menus = data;
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des menus', err);
        }
      });
    }
  }

  openEditMenuDialog(menu: any): void {
    const dialogRef =this.dialog.open(ModiferMenuComponent, {
      data: menu,
       width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Lenu modifié!");
        window.location.reload();
      } else {
        console.log("Modification annulée");
      }
    });
  }
  clear(){
    this.getAllMenus()
  }
}