import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  mensaje:string;
  materia='Pav II';
  verMateria=true;
  logo = 'https://wwww.frc.utn.edu.ar/imagenes/logoutn.gif';

  constructor() { }

  ngOnInit() {
    this.mensaje = "Hola mundo desde Angular con interpolacion"
  }

}