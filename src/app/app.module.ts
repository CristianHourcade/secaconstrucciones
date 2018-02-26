import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductoService } from './producto.service';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AbmProductosComponent } from './abm-productos/abm-productos.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BorradorComponent } from './borrador/borrador.component';
import {HttpClientModule} from '@angular/common/http';
import { AbmServiciosComponent } from './abm-servicios/abm-servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    AbmProductosComponent,
    HomeComponent,
    NavbarComponent,
    BorradorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AbmServiciosComponent,
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
],
  providers: [ProductoService,Http],
  bootstrap: [AppComponent]
})
export class AppModule { }
