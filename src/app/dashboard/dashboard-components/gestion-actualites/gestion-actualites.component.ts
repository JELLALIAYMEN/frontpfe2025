import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActualiesService } from 'src/app/services/actualies.service';
import { AddActualiteComponent } from './add-actualite/add-actualite.component';
import { map } from 'rxjs';

@Component({
  selector: 'app-gestion-actualites',
  templateUrl: './gestion-actualites.component.html',
  styleUrls: ['./gestion-actualites.component.scss']
})
export class GestionActualitesComponent implements OnInit{
  actualites: any[] = [];
  page: number = 0;
  size: number = 4;
  totalActualites: number = 0;
  totalPages: number = 0;  // Nombre total de pages pour la pagination

  constructor(
    private actualiteService: ActualiesService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadActualites();
  }

  loadActualites(): void {
    this.actualiteService.getAllActualites(this.page, this.size).subscribe({
      next: (response: any) => {
        console.log('Réponse brute de l\'API :', response);
        console.log('totalElements:', response.totalElements);  // Vérifiez la structure de la réponse
        console.log('totalPages:', response.totalPages);  // Vérifiez la structure de la réponse
  
        // Vérification de la présence de content et pagination
        if (response.content && response.totalElements !== undefined && response.totalPages !== undefined) {
          this.actualites = response.content.map((item: any) => ({
            id: item.id,
            title: item.titre,
            description: item.description,
            date: item.datePublication,
            videoUrl: '',
            fichierUrl: item.fichierUrl || '',
            icon: '📢',
          }));
  
          // Charger les vidéos et les fichiers après avoir chargé les actualités
          response.content.forEach((item: any) => {
            if (item.videoUrl) {
              this.getActualiteVideo(item.id);
            }
            if (item.fichierUrl) {
              this.getActualiteFile(item.id);
            }
          });
  
          // Mise à jour des informations de pagination
          this.totalActualites = response.totalElements;
          this.totalPages = response.totalPages;
  
          console.log('Total des actualités:', this.totalActualites);
          console.log('Nombre total de pages:', this.totalPages);
        } else {
          console.error('Erreur dans la structure de la réponse:', response);
        }
      },
      error: (error) => {
        console.error('Erreur lors du chargement des actualités', error);
      },
    });
  }
  
  

  getActualiteVideo(id: number): void {
    this.actualiteService.getActualiteViode(id).subscribe(
      (videoUrl: string) => {
        const actualite = this.actualites.find((item) => item.id === id);
        if (actualite) {
          actualite.videoUrl = videoUrl;
        }
      },
      (error) => {
        console.error(`Erreur lors du chargement de la vidéo pour l'actualité ${id}:`, error);
      }
    );
  }
  
  getActualiteFile(id: number) {
    this.actualiteService.getActualiteFile(id).subscribe(
      (fileUrl: string) => {
        const actualite = this.actualites.find(item => item.id === id);
        if (actualite) {
          actualite.fichierUrl = fileUrl;  // Utilisez l'URL blob générée
        }
      },
      (error) => {
        console.error(`Erreur lors du chargement du fichier pour l'actualité ${id}:`, error);
      }
    );
  }
  

  nextPage(): void {
    if (this.page < this.totalPages - 1) {
      this.page++;  // Incrémenter la page
      this.loadActualites();  // Recharger les actualités pour la nouvelle page
    }
  }
  
  prevPage(): void {
    if (this.page > 0) {
      this.page--;  // Décrémenter la page
      this.loadActualites();  // Recharger les actualités pour la page précédente
    }
  }

  openAddActualite(): void {
    this.dialog.open(AddActualiteComponent);
  }
}
