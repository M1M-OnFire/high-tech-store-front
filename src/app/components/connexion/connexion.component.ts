import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  loginForm!: FormGroup;
  isSubmitted  =  false;

  constructor(private sa: AuthService , private route: Router, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder ) {
  }

  get formControls() { return this.loginForm.controls; }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

  deconnexion() {
    this.sa.logoutUser();
  }

  connexion(){
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      console.log('invalid');
      return;
    }
    this.sa.login(this.loginForm.get('email').value, this.loginForm.get('password').value);
    this.route.navigateByUrl('/home');
  }
}
