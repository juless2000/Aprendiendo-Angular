/*
	Service -> Clases cuyo objetivp es separar la lógica 
	principal de la aplicación.

	Clases con muchos métodos q van a ser funcionalidades 
	de la aplicación.

	Peticiones ajax a nuestro backend servicio Rest relacionado con la 
	entidad 

	El servicio PROVEE DATOS  a un COMPONENTE
*/

// LO PRIMERO ES EL INJECTABLE -> Decorador
import { Injectable } from '@angular/core';
// Como estamos usando Zapatilla, importamos el modelo de datos
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService{
	// Array de objeto de tipo zapatilla
	public zapatillas: Array<Zapatilla>;

	constructor(){
			this.zapatillas = [
			// Creamos objetos en el array 
			// Ingresamos datos al objeto Zapatilla dentro del array Zapatilla
			new Zapatilla('Reebok Classic', 'Reebok', 'Blamco', 70, true),
			new Zapatilla('Nike Classic', 'Nike', 'Negro', 180, false),
			new Zapatilla('Adidas Classic', 'Nike', 'Blamco', 80, true),
			new Zapatilla('Puma Classic', 'Puma', 'Negro', 120, false),
			new Zapatilla('Puma Reveal', 'Puma', 'Negro', 75, true)
		];
	}

	getTexto(){
		return "hola mundo desde un servicio"
	}

	// Devolver un array de zapatillas
	getZapatillas(): Array<Zapatilla>{
		return this.zapatillas;
	}
}