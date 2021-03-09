import { Component, OnInit } from '@angular/core';
import { Articles } from 'src/app/models/Articles';
import { OrdinateursService } from 'src/app/services/ordinateurs.service';

@Component({
  selector: 'app-pc-portable',
  templateUrl: './pc-portable.component.html',
  styleUrls: ['./pc-portable.component.css']
})
export class PcPortableComponent implements OnInit {

  articles: Array<Articles> = [];

  constructor(private pcPortableService: OrdinateursService) { }

  ngOnInit(): void {
    this.pcPortableService.getAll().subscribe(res => {
      this.articles = res;
    });
  }

}
