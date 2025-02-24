import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {

  search: boolean = false;
  userProfile: string = localStorage.getItem('userProfile') || '';
  userName: string = ''; 


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    ngOnInit(): void {
      const email = localStorage.getItem('email'); 
      if (email) {
        this.userService.userbyemail(email).subscribe({
          next: (user) => {
            this.userName = `${user.nom} ${user.prenom}`;
          },
          error: (err) => {
            console.error('Erreur lors de la récupération de l\'utilisateur :', err);
          }
        });
      }
    }
  constructor(private breakpointObserver: BreakpointObserver,
     private router:Router, private userService: UserService) { }

  routerActive: string = "activelink";

  public clear() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/auth/login']);
  }
  
}
