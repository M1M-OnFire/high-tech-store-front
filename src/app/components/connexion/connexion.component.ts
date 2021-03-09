import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  messageError: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  connexion(connexionForm: any){
    let data = connexionForm.value;
    console.log(data);
  }

}
