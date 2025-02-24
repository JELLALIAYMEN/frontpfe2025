import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent  implements OnInit {

  showAjoutMenuForm = false;
  showListeMenu = false;
  
  constructor( private router: Router){}
  ngOnInit(): void {
    
  }
  menuItems = [
    {
      name: 'Créer un Nouveau Menu',
      icon: 'fas fa-utensils', // Icône représentant la gestion des menus
      action: () => this.openAjoutForm()
    },
    {
      name: 'Voir Tous les Menus',
      icon: 'fas fa-list', // Icône d'une liste pour afficher tous les menus
      action: () => this.openListMenu()
    },
  ];
  
  openAjoutForm(): void {
    this.showAjoutMenuForm = !this.showAjoutMenuForm; 
    this.showListeMenu = false; 
  }
  openListMenu(): void {
    this.showListeMenu = !this.showListeMenu;
    this.showAjoutMenuForm = false;
  }

  handleMenuClick(item: any): void {
    item.action();
  }

}