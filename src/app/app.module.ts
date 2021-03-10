import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PcPortableComponent } from './components/ordinateur/pc-portable/pc-portable.component';
import { PcBureauComponent } from './components/ordinateur/pc-bureau/pc-bureau.component';
import { PcAccessoiresComponent } from './components/ordinateur/pc-accessoires/pc-accessoires.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PanierComponent } from './components/panier/panier.component';
import { ProduitComponent } from './components/produit/produit.component';
import { ProduitDetailComponent } from './components/produit-detail/produit-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PcPortableComponent,
    PcBureauComponent,
    PcAccessoiresComponent,
    ConnexionComponent,
    PanierComponent,
    ProduitComponent,
    ProduitDetailComponent
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
