import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from '../doc.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
id:any ;
doc:any ;
imagePath: any;

constructor(private route :ActivatedRoute,private service :DocumentService,private _sanitizer: DomSanitizer ){}
  ngOnInit(){
  this.id = this.route.snapshot.params["id"];
    this.service.docbyid(this.id).subscribe((res)=>{
      this.doc=res ;
      
      this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' +  this.doc.image);
      console.log(this.imagePath)
    })
}
}
