import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthentificationGuard } from './guards/authentification.guard';
import { PanierComponent } from './components/panier/panier.component';
import { ProduitComponent } from './components/produit-card/produit.component';
import { ProduitDetailComponent } from './components/produit-detail/produit-detail.component';
import { FormComponent } from './components/form/form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { FilterPipe } from './components/filter.pipe';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
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
    CategorieComponent,
    FormComponent,
    FooterComponent,
    FilterPipe,
    ContenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  providers: [AuthentificationGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
