import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AbmProductosComponent } from './abm-productos/abm-productos.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AbmServiciosComponent } from './abm-servicios/abm-servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    AbmProductosComponent,
    HomeComponent,
    NavbarComponent,
    AbmServiciosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
