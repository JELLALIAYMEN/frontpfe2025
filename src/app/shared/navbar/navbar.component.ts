import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  implements OnInit{
  routerActive: string = "activelink";
  userProfile: string = localStorage.getItem('userProfile') || '';
  userName: string = ''; 
  classe: string = ''; 


  constructor(private breakpointObserver: BreakpointObserver,
    private router:Router, private userService: UserService      
  ) {}

  ngOnInit(): void {
    const email = localStorage.getItem('email'); 
    if (email) {
      this.userService.userbyemail(email).subscribe({
        next: (user) => {
          this.userName = `${user.nom} ${user.prenom}`;
          this.classe= `${user.classe.nomclasse}`
        },
        error: (err) => {
          console.error('Erreur lors de la récupération de l\'utilisateur :', err);
        }
      });
    }
  }
  
isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(map(result => result.matches),shareReplay());
     
  clear() {
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['/auth/login']);
  }

  
}

