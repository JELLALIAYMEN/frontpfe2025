import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-parent',
  templateUrl: './home-parent.component.html',
  styleUrls: ['./home-parent.component.scss']
})
export class HomeParentComponent {
  constructor(private router: Router) {}

navigateTo(route: string) {
  this.router.navigate([route]);
}
  parentMenuItems = [
    { name: 'Actualités', icon: 'fas fa-newspaper', route: '/actualites' },
    { name: 'Notes et Moyennes', icon: 'fas fa-chart-bar', route: '/notes-moyennes' },
    { name: 'Discipline', icon: 'fas fa-user-check', route: '/discipline' },
    { name: 'Emploi du Temps', icon: 'fas fa-calendar-alt', route: '/emploi-du-temps' },
    { name: 'Calendrier Examen', icon: 'fas fa-calendar-day', route: '/calendrier-examen' },
    { name: 'Paiement', icon: 'fas fa-wallet', route: '/payment' }
  ];
  
}
