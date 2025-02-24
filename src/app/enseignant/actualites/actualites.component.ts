import { Component } from '@angular/core';
import { ActualiesService } from 'src/app/services/actualies.service';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.scss']
})
export class ActualitesComponent {
 actualites: any[] = [];
  page: number = 0;
  size: number = 4;
  totalActualites: number = 0;
  totalPages: number = 0;
  userProfile: string = localStorage.getItem('userProfile') || 'enseignant';  

  constructor(private actualiteService: ActualiesService) {}

  ngOnInit(): void {
    this.loadActualites();
  }

  loadActualites(): void {
      this.actualiteService.getActualitesByCible(this.userProfile,this.page, this.size).subscribe({
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
      this.page++;
      this.loadActualites();  // Recharger les actualités pour la nouvelle page
    }
  }

  prevPage(): void {
    if (this.page > 0) {
      this.page--;
      this.loadActualites();  // Recharger les actualités pour la page précédente
    }
  }
}
