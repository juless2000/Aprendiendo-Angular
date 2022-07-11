// Importamos el Component
import { Component, OnInit } from '@angular/core';
// Importamos el modelo de datos Zapatilla
import { Zapatilla } from '../models/zapatilla';
// Importamos el service de Zapatilla
import { ZapatillaService } from '../services/zapatilla.service';

// Decorador
@Component({
	// Etiqueta donde va a cargar el componente
	selector: 'zapatillas',
	// Indicamos nuestra vista
	templateUrl: './zapatillas.component.html',
	// No funciona el ZapatillaService hasta que no lo inyecte como un PROVIDER
	providers: [ZapatillaService]

})
// Definimos la clase
export class ZapatillasComponent implements OnInit{
	// Indicamos sus propiedades
	public titulo: string = 'Componente de zapatillas';
	// Array de objeto de tipo zapatilla
	public zapatillas: Array<Zapatilla>;
	// Definir un array de string para obtener las marcas
	public marcas: Array<string>; 
	// Propiedad color
	public color: string;

	public mi_marca: string;

	constructor(
		// Inyectar el servicio
		private _zapatillaService: ZapatillaService
	){
		// Inicializamos el array de zapatillas para q no de error
		this.zapatillas = new Array();
		this.mi_marca = "fila";
		// Inicializamos la propiedad color
		// Utilizando el ngSwitch -> cambiamos el color y pondra/ejecutara 
		//  el color correspondiente del li 
		this.color = "blue";
		// Inicializamos el array de marcas
		this.marcas = new Array();

		/* El array de zapatillas ponerlo en el servicio
		this.zapatillas = [
			// Creamos objetos en el array 
			// Ingresamos datos al objeto Zapatilla dentro del array Zapatilla
			new Zapatilla('Reebok Classic', 'Reebok', 'Blamco', 70, true),
			new Zapatilla('Nike Classic', 'Nike', 'Negro', 180, false),
			new Zapatilla('Adidas Classic', 'Nike', 'Blamco', 80, true),
			new Zapatilla('Puma Classic', 'Puma', 'Negro', 120, false),
			new Zapatilla('Puma Reveal', 'Puma', 'Negro', 75, true)
		];
		*/
	}

	ngOnInit(){

		// Utilizar el servicio ZapatillaService
		// Llamamos al metodo q devuelve el array de zapatillas del ZapatillaService
		this.zapatillas = this._zapatillaService.getZapatillas();
		// Mostrará la alerta del metodo getTexto() del ZapatillaService
		alert(this._zapatillaService.getTexto());

		//console.log(this.zapatillas)

		this.getMarcas();
	}

	// Metodo marcas
	getMarcas(){
		// forEach -> Tiene un valor y un indice
		// Recorrer el array de zapatillas
		this.zapatillas.forEach((zapatilla, index) => {
			//Eliminar los elementos duplicados
			// En el caso de que la marca de la zapatilla no exista,
			// que haga el push
			if(this.marcas.indexOf(zapatilla.marca) < 0){
				// Para guardar un nuevo elemento dentro del array
				// this.marcas para acceder a la propiedad de arriba
				// Se guardan las marcas una sola vez en el array
				this.marcas.push(zapatilla.marca);
			}

			// console.log(index);
		});

		console.log(this.marcas);
	}

	/* Eventos click para el two way data binding*/
	getMarca(){
		alert(this.mi_marca)
	}

	addMarca(){
		// Añadimos a la lista de marca, los elementos del input
		// del mi_marca
		this.marcas.push(this.mi_marca)
	}

	/* Metodo borrar marca */
	borrarMarca(indice:number){
		// Metodo delete, seleccionamos el array de marcas y le 
		// pasamos el indice. Borra el elemento y lo convierte en
		// undefined  
		// delete this.marcas[indice];


		// Metodo splice -> manera mas efectiva. Le pasamos el indice
		// q quiero borrar y a partir de el, que borre ese elemento
		// 1 -> q borre un elemento a partir de ese  
		this.marcas.splice(indice, 1);
	}

	// Evento blur -> captura cuando salimos de un input 	
	onBlur(){
		console.log("Has salido del input");
	}

	// Evento keyup -> captura una tecla y al soltarla, lanza
	// el metodo mostrarPalabra
	mostrarPalabra(){
		alert(this.mi_marca);
	}
}