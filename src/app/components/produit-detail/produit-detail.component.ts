import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articles } from 'src/app/models/Articles';
import { ProduitService } from 'src/app/services/produits/produit.service';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {

  article : Articles;

  constructor(
      private route: ActivatedRoute,
      private produitService: ProduitService
    ) { }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(){
    const id = this.route.snapshot.paramMap.get('id');
    this.produitService.get(id).subscribe(res => {
      this.article = res;
      console.log(this.article);
      
    });
  }

}
