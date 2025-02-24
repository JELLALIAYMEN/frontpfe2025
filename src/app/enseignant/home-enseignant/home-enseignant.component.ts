import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-enseignant',
  templateUrl: './home-enseignant.component.html',
  styleUrls: ['./home-enseignant.component.scss']
})
export class HomeEnseignantComponent {
  constructor(private router: Router) {}

navigateTo(route: string) {
  this.router.navigate([route]);
}
  teacherMenuItems = [
    { name: 'Cours', icon: 'fas fa-book', route: '/enseignant/mescours' },
    { name: 'Discipline', icon: 'fas fa-calendar-alt', route: '/enseignant/disicplines' },
    { name: 'Réclamations', icon: 'fas fa-comments', route: '/enseignant/reclamations' },
    { name: 'Actualité', icon: 'fas fa-bullhorn', route: '/enseignant/actualites' },
    { name: 'Module', icon: 'fas fa-bullhorn', route: '/enseignant/module' },
    { name: 'Asseigner', icon: 'fas fa-bullhorn', route: '/enseignant/asseigner' },

  ];
  
}
