import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home/home.component';
import { HeaderComponent } from './Home/header/header.component';
import { StoreComponent } from './Home/store/store.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CatalogComponent } from './Home/catalog/catalog.component';
import { CountryComponent } from './Components/country/country.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StoreComponent,
    CatalogComponent,
    CountryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
