import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { HomeComponent } from './components/home/home.component';
import { PcAccessoiresComponent } from './components/ordinateur/pc-accessoires/pc-accessoires.component';
import { PcBureauComponent } from './components/ordinateur/pc-bureau/pc-bureau.component';
import { PcPortableComponent } from './components/ordinateur/pc-portable/pc-portable.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"pc-portable", component: PcPortableComponent},
  {path:"pc-bureau", component: PcBureauComponent},
  {path:"pc-accessoires", component: PcAccessoiresComponent},
  {path:"connexion", component: ConnexionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
