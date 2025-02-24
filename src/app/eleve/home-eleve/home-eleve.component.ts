import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-eleve',
  templateUrl: './home-eleve.component.html',
  styleUrls: ['./home-eleve.component.scss']
})
export class HomeEleveComponent {
  constructor(private router: Router) {}

  menuItems = [
    { name: 'Cours', icon: 'fas fa-book', route: 'eleve/mescours' },
    { name: 'Moyennes', icon: 'fas fa-chart-line', route: '/eleve/notes-moyenne' },
    { name: 'Menu', icon: 'fas fa-utensils', route: '/eleve/menu' },
    { name: 'Réclamation', icon: 'fas fa-comments', route: '/eleve/reclamations' },
    { name: 'Discipline', icon: 'fas fa-calendar-alt', route: 'eleve/discipline-eleve' },
    { name: 'Actualité', icon: 'fas fa-bullhorn', route: 'eleve/actualites' },
  ];
  
  navigateTo(route: string) {
      this.router.navigate([route]);
  }
  handleMenuClick(item:any): void{
    if(item.action){
      item.action();
    } else if (item.route) {
      this.navigateTo(item.route)
    }
  }
}
