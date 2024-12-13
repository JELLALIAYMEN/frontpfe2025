import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
profil:any
  ngOnInit(){
this.profil=localStorage.getItem('profil')
}
}
