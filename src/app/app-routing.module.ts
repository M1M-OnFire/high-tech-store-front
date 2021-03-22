import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieComponent } from './components/categorie/categorie.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { HomeComponent } from './components/home/home.component';
import { PanierComponent } from './components/panier/panier.component';
import { ProduitDetailComponent } from './components/produit-detail/produit-detail.component';
import { AuthentificationGuard } from './guards/authentification.guard';
import { NoAuthentificationGuard } from './guards/no-authentification.guard';
import {FormComponent} from './components/form/form.component';

const routes: Routes = [
  {path:"", component: ConnexionComponent, canActivate:[NoAuthentificationGuard]},
  {path:"home", component: HomeComponent, canActivate:[AuthentificationGuard]},
  {path:"connexion", component: ConnexionComponent, canActivate: [NoAuthentificationGuard]},
  {path:"panier", component: PanierComponent},
  {path:"produit-detail/:id", component: ProduitDetailComponent, canActivate: [NoAuthentificationGuard]},
  {path:"categories/:id", component: CategorieComponent, canActivate: [NoAuthentificationGuard]},
  {path:"form", component: FormComponent, canActivate: [NoAuthentificationGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
