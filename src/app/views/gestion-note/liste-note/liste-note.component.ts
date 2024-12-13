import { Component } from '@angular/core';
import { NoteService } from '../noe.service';

@Component({
  selector: 'app-liste-note',
  templateUrl: './liste-note.component.html',
  styleUrls: ['./liste-note.component.scss']
})
export class ListeNoteComponent {
  allnote:any ;
  allbyeleve:any;
  allbyprof:any ;
  profil:any ;
constructor(private service : NoteService){}
ngOnInit(){
  this.profil=localStorage.getItem("profil")
  this.service.allnote().subscribe((res)=>{
    this.allnote=res ;
  })
  this.service.allnotebyeleve().subscribe((res)=>{
    this.allbyeleve=res ;
    console.log(this.allbyeleve)
  })  
  this.service.allnotebyprof().subscribe((res)=>{
    this.allbyprof=res ; 
  })
}
}
