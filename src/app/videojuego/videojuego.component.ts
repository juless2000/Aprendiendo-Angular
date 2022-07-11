// Import del objeto Component e indicamos en que paquete de angular
// está ubicado el objeto

// Importamos tambien la clase/interface OnInit

/*
HOOKS

 DoCheck -> Se ejecuta cada vez q se produce algun cambio en el
 componente o la aplicacion

 OnDestroy -> Se ejecuta antes de eliminar la instancia de un 
 componente

*/
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

//Definir el decorador Component
// Importante no cerrar con ;
@Component({
	// Propiedades
	// selector -> nos permite que nombre va a a tener la 
	// etiqueta/directiva del componente
	selector: 'videojuego',
	// Como cargar mi plantilla desde archivo externo
	templateUrl: './videojuego.component.html'

	// Definir una plantilla en linea o archivo externo, 
	// en este caso es en linea
/*	template: `
		<h2>Componente de Videjuego</h2>
		<ul>
			<li>GTA</li>
			<li>PES 2022</li>
			<li>VALORANT</li>
			<li>MARIO 64</li>
		</ul>
	`
*/	
})
// Definir la clase 
// implements a la interface OnInit
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
	// Definimos propiedades de la clase
	public titulo: string;
	public listado: string;


	// Definimos un constructor
	constructor(){
		// Darle valor al titulo
		this.titulo = "Componente de videojuegos";
		this.listado = "Listado de los juegos más populares: ";

		//console.log("Se ha cargado el component videojuego.component.ts");
	}

	// Nos obliga a tener el metodo ngOnInit ya que es una interface
	// Metodo que se ejecuta al cargar el component despues del constructor
	ngOnInit() {
		//console.log("OnInit ejecutado");
	}

	// Nos obliga a tener el metodo ngDoCheck ya que es una interface
	// Se ejecuta cada vez que  haya un cambio en algun componente
	// de la aplicacion
	ngDoCheck() {
		//console.log("DoCheck ejecutado");
	}

	// Se va a ejecutar cuando se elimine un componente
	ngOnDestroy() {
		//console.log("OnDestroy ejecutado");
	}

	// Cambia el titulo
	cambiarTitulo(){
		this.titulo = "Nuevo titulo del componente videojuego";
	}
}