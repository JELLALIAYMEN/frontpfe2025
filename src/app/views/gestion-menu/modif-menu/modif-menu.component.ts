import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-modif-menu',
  templateUrl: './modif-menu.component.html',
  styleUrls: ['./modif-menu.component.scss']
})
export class ModifMenuComponent {
  meuform!: FormGroup;
  id:any ;
  isEleveSelected = false;
  isEleveSelected2 = false;
  menu:any;
  constructor(private router: Router,private Service :MenuService,private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.meuform = new FormGroup({
      typemenu: new FormControl("", [Validators.required]),
      platentree: new FormControl("", [Validators.required]),
      platprincipale: new FormControl("", [Validators.required]),
      dessert: new FormControl("", [Validators.required]),
      nomjour: new FormControl("", [Validators.required]),
      datedeb: new FormControl("", [Validators.required]),
      datefin: new FormControl("", [Validators.required]),
    });
    if (this.id) {
      this.Service.menubyid(this.id).subscribe((res) => {
        this.menu = res;

        // Mise à jour des valeurs dans le formulaire
        this.meuform.patchValue({
          typemenu:this.menu.typemenu,
          platentree:this.menu.platentree,
          platprincipale:this.menu.platprincipale,
          dessert:this.menu.dessert,
          nomjour:this.menu.nomjour,
          datedeb:this.menu.datedeb,
          datefin:this.menu.datefin          

        });
      });
    }
  }


  onProfilChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    
    this.isEleveSelected = selectedValue === 'Teacher';
    this.isEleveSelected2 = selectedValue === 'Eleve';

  }


  ajouter(){
    let d = {
      typemenu:this.meuform.value.typemenu,
          platentree:this.meuform.value.platentree,
          platprincipale:this.meuform.value.platprincipale,
          dessert:this.meuform.value.dessert,
          nomjour:this.meuform.value.nomjour,
          datedeb:this.meuform.value.datedeb,
          datefin:this.meuform.value.datefin,          
          id:this.id
    } 
    
    this.Service.moodifier(d).subscribe((res)=>{
      window.alert("modifier Menu avec succées")
      this.router.navigate(["gestion-Menu"]);

    })}
}
