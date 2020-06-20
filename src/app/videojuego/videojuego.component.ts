import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.css']
})
export class VideojuegoComponent implements OnInit, DoCheck {

	public titulo:String;
	public listado:String;

  constructor() {
  	this.titulo = "Componente de videojuegos";
  	this.listado = "Listado de más populares";
  }

  ngOnInit(): void {
  	console.log("ngOnInit cargado");
  }

  ngDoCheck():void {
  	console.log("ngDoCheck cargado");
  }

}
