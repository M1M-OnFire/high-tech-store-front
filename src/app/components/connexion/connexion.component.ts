import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  messageError: string = "";
  username:string;
  password:string;
  isLoggedIn: boolean = false;
  retUrl:string="home";

  constructor(private sa: AuthService , private route: Router, private activatedRoute: ActivatedRoute ) {
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
        this.retUrl = params.get('retUrl'); 
        console.log( 'LoginComponent/ngOnInit '+ this.retUrl);
    });
}

  deconnexion() {
    this.sa.logoutUser();
    this.isLoggedIn = false;
  }

  connexion(connexionForm: any){
    let data = connexionForm.value;
    console.log(data);

    this.sa.login(data.email, data.pass).toPromise()
    .then(() => {
      console.log("done");
      this.isLoggedIn = true;
      this.route.navigate(['/home'])
    })
    .catch( () => {
      console.log("error");
      this.messageError = "Erreur lors de la connexion";
    })
  }
}
