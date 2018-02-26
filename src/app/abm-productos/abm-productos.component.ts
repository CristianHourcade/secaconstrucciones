import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ProductoService } from '../producto.service';
import { Productos } from '../abm-productos/productos';
@Component({
  selector: 'app-abm-productos',
  templateUrl: './abm-productos.component.html',
  styleUrls: ['./abm-productos.component.css']
})
export class AbmProductosComponent implements OnInit {
  heroes: Productos[];
  name : string;

  constructor() { }

  ngOnInit() {
  }

  AgregarProducto(name : string){

    if (!name) { return; }
    ProductoService.prototype.addHero({ name } as Productos)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
      console.log(name);
  }
}
