import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PanierComponent } from './components/panier/panier.component';
import { ProduitComponent } from './components/produit-card/produit.component';
import { ProduitDetailComponent } from './components/produit-detail/produit-detail.component';
import { ContenuComponent } from './contenu/contenu.component';
import { CategorieComponent } from './components/categorie/categorie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ConnexionComponent,
    PanierComponent,
    ProduitComponent,
    ProduitDetailComponent,
    ContenuComponent,
    CategorieComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
