import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  constructor(private http: HttpClient){}
  enregistrerPayement(pay:any , id:any) {
    return this.http.post<number>(`${environment.BASE_URL}/paiement/payer?id=`+id,pay )
    .pipe(
      catchError(this.handleError)
    );  
  }
    private handleError(error: any): Observable<never> {
      let errorMessage = 'Une erreur est survenue.';
    
      if (error.error?.message) {
        // Message d'erreur renvoyé par le backend
        errorMessage = error.error.message;
      } else if (error.status) {
        // Erreur HTTP standard (ex. : 404, 500)
        errorMessage = `Erreur ${error.status}: ${error.statusText}`;
      }
    
      // Vous pouvez enregistrer l'erreur pour un suivi ou l'afficher dans la console
      console.error('Erreur détectée:', error);
    
      return throwError(errorMessage);
    }
    

}
