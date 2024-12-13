import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../gestion-utilisateur/userservice';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-ajout-menu',
  templateUrl: './ajout-menu.component.html',
  styleUrls: ['./ajout-menu.component.scss']
})
export class AjoutMenuComponent {
  meuform!: FormGroup;
  isEleveSelected = false;
  isEleveSelected2 = false;

  constructor(private router: Router,private Service :MenuService) { }
  ngOnInit(): void {
    this.meuform = new FormGroup({
      typemenu: new FormControl("", [Validators.required]),
      platentree: new FormControl("", [Validators.required]),
      platprincipale: new FormControl("", [Validators.required]),
      dessert: new FormControl("", [Validators.required]),
      nomjour: new FormControl("", [Validators.required]),
      datedeb: new FormControl("", [Validators.required]),
      datefin: new FormControl("", [Validators.required]),
    });
  }


  onProfilChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    
    this.isEleveSelected = selectedValue === 'Teacher';
    this.isEleveSelected2 = selectedValue === 'Eleve';

  }


  ajouter(){
    console.log(this.meuform.value)
    this.Service.creer(this.meuform.value).subscribe((res)=>{
      window.alert("menu ajouter avec succées")
      this.router.navigate(["gestion-Menu"]);

    })}

}
