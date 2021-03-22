import { Component, OnInit, Input } from '@angular/core';
import { Articles } from 'src/app/models/Articles';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  @Input()
  article : Articles;

  constructor() { }

  ngOnInit(): void {
    console.log(this.article);
    
  }

}
