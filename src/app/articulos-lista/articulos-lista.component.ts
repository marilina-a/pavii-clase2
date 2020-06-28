import { Component, OnInit } from '@angular/core';
import {ArticuloFamilia} from '../models/articulofamilia';
import {ArticulosFamilias} from '../models/articulosfamilias-collection';
@Component({
  selector: 'app-articulos-lista',
  templateUrl: './articulos-lista.component.html',
  styleUrls: ['./articulos-lista.component.css']
})
export class ArticulosListaComponent implements OnInit {
  listaArticulos: ArticuloFamilia[];
  verGrilla = false;
  mensajeBoton = 'Mostrar Grilla';
  constructor() {}

  ngOnInit(): void {
    this.listaArticulos = ArticulosFamilias;
  }
  MostrarOcultarGrilla(){
    this.mensajeBoton = this.verGrilla?'Mostrar grilla' : 'Ocultar';
    this.verGrilla= !this.verGrilla;
    
  }
}
