import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {FileUploader} from 'ng2-file-upload';
import{DocumentService} from '../doc.service'
import { JoueurService } from '../../gestion-joueur/joueur.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-ajout-doc',
  templateUrl: './ajout-doc.component.html',
  styleUrls: ['./ajout-doc.component.scss']
})
export class AjoutDocComponent {
  logo!:any;
  imagePath: any;
  allj!:any ;
  docForm!: FormGroup;
  public uploader!: FileUploader;
constructor(private _sanitizer: DomSanitizer,private service : DocumentService,
  private servicejoueur:JoueurService){}

ngOnInit(){
  this.servicejoueur.alljoueur().subscribe((res)=>{
    this.allj =res
  })
  this.docForm = new FormGroup({
    type: new FormControl("", [Validators.required]),
    nlicence: new FormControl("", [Validators.required]),
   
  });

}
  handleFileSelect(evt:any) {
    var files = evt.target.files;
    const file = files[0];
    if (files && file) {
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(file);
 }
}
_handleReaderLoaded(readerEvt:any) {
  var binaryString = readerEvt.target.result;
  this.logo = btoa(binaryString);
  this.convertBase64ToImage(this.logo);
}  
convertBase64ToImage(img:any) {
  this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + img);
}
ajouter(){
  let doc ={
    type:this.docForm.value.type,
    image:this.logo
  }
  this.service.adddoc(doc,this.docForm.value.nlicence).subscribe((res)=>{
    
  })
}
}
