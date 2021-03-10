import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { HomeComponent } from './components/home/home.component';
import { PcAccessoiresComponent } from './components/ordinateur/pc-accessoires/pc-accessoires.component';
import { PcBureauComponent } from './components/ordinateur/pc-bureau/pc-bureau.component';
import { PcPortableComponent } from './components/ordinateur/pc-portable/pc-portable.component';
import { PanierComponent } from './components/panier/panier.component';
import { ProduitDetailComponent } from './components/produit-detail/produit-detail.component';
import { AuthentificationGuard } from './guards/authentification.guard';
import { NoAuthentificationGuard } from './guards/no-authentification.guard';

const routes: Routes = [
  {path:"", component: ConnexionComponent, canActivate:[NoAuthentificationGuard]},
  {path:"home", component: HomeComponent, canActivate:[AuthentificationGuard]},
  {path:"pc-portable", component: PcPortableComponent, canActivate:[AuthentificationGuard]},
  {path:"pc-bureau", component: PcBureauComponent, canActivate:[AuthentificationGuard]},
  {path:"pc-accessoires", component: PcAccessoiresComponent, canActivate: [AuthentificationGuard]},
  {path:"connexion", component: ConnexionComponent, canActivate: [NoAuthentificationGuard]},
  {path:"panier", component: PanierComponent},
  {path:"produit-detail/:id", component: ProduitDetailComponent, canActivate: [NoAuthentificationGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
