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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PcPortableComponent,
    PcBureauComponent,
    PcAccessoiresComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
