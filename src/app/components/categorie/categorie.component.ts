import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Articles } from 'src/app/models/Articles';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {


  nomCategorie: string;
  articles: Array<Articles>

  constructor(
      private route: ActivatedRoute,
      private categorieService: CategoriesService
    ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.categorieService.getItem(id).subscribe(res => 
        this.articles = res
      );
      this.categorieService.getCategorie(id).subscribe(res =>
        this.nomCategorie = res.name
      );
   })
  }

}
