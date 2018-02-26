import { Component, OnInit,  } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ProductoService } from "../producto.service"; //Importamos nuestro servicio
import "rxjs/add/operator/map";


@Component({
  selector: 'app-borrador',
  templateUrl: './borrador.component.html',
  styleUrls: ['./borrador.component.css']
})
export class BorradorComponent implements OnInit {

  constructor() { }

  AgregarDato(){
   return(ProductoService.prototype.AgregarProducto());
    }  
  
  ngOnInit() {
  
  }

}
