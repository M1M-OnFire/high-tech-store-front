import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articles } from 'src/app/models/Articles';
import { OrdinateursService } from 'src/app/services/ordinateurs.service';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {

  article : Articles;

  constructor(
      private route: ActivatedRoute,
      private ordinateurService: OrdinateursService
    ) { }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(){
    const id = this.route.snapshot.paramMap.get('id');
    this.ordinateurService.get(id).subscribe(res => {
      this.article = res;
      console.log(this.article);
      
    });
  }

}
