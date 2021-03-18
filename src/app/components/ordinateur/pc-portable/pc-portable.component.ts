import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/models/Items';
import { OrdinateursService } from 'src/app/services/ordinateurs.service';

@Component({
  selector: 'app-pc-portable',
  templateUrl: './pc-portable.component.html',
  styleUrls: ['./pc-portable.component.css']
})
export class PcPortableComponent implements OnInit {

  items: Array<Items> = [];

  constructor(private pcPortableService: OrdinateursService) { }

  ngOnInit(): void {
    this.pcPortableService.getAll().subscribe(res => {
      this.items = res;
    });
  }

}
