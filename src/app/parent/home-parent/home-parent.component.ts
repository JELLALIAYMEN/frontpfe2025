import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { SelectionEleveComponent } from '../selection-eleve/selection-eleve.component';

@Component({
  selector: 'app-home-parent',
  templateUrl: './home-parent.component.html',
  styleUrls: ['./home-parent.component.scss']
})
export class HomeParentComponent implements OnInit {
  routerActive: string = "activelink";
  userId: any;

  parentMenuItems = [
    { name: 'Actualités', icon: 'fas fa-newspaper', route: '/actualites' },
    { name: 'Notes et Moyennes', icon: 'fas fa-chart-bar', action: 'notes' },
    { name: 'Discipline', icon: 'fas fa-user-check', action: 'discipline' },
    { name: 'Emploi du Temps', icon: 'fas fa-calendar-alt', route: '/emploi-du-temps' },
    { name: 'Calendrier Examen', icon: 'fas fa-calendar-day', route: '/calendrier-examen' },
    { name: 'Paiement', icon: 'fas fa-wallet', route: '/payment' }
  ];
  
  constructor(
    private router: Router,
    private userService: UserService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    const email = localStorage.getItem('email');
    if (email) {
      this.userService.userbyemail(email).subscribe({
        next: (user) => {
          this.userId = user.id;
        },
        error: (err) => {
          console.error('Erreur lors de la récupération de l\'utilisateur :', err);
        }
      });
    }
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  handleMenuClick(item: any): void {
    console.log('Clic sur le menu:', item); // Loggez l'élément du menu
  
    if (item.action) {
      // Si une action est définie, on effectue l'action spécifique
      if (item.action === 'notes') {
        this.openStudentSelectionDialog('parent/moyenne-note');
      } else if (item.action === 'discipline') {
        this.openStudentSelectionDialog('parent/discipline');
      }
    } else if (item.route) {
      this.router.navigate([item.route]);
    }
  }

  openStudentSelectionDialog(targetRoute: string): void {
    const dialogRef = this.dialog.open(SelectionEleveComponent, {
      width: '400px',
      data: { targetRoute }, // Pass targetRoute to the dialog
    });
  
    dialogRef.afterClosed().subscribe((selectedStudent) => {
      if (selectedStudent) {
        console.log("Élève sélectionné:", selectedStudent); // Vérification console
        this.router.navigate([`${targetRoute}/${selectedStudent.eleve.id}`]);
      } else {
        console.log("Aucun élève sélectionné.");
      }
    });
  }
  
}
