// Se realizaran peticiones Ajax
// Importamos el servicio injectable
import { Injectable } from '@angular/core';
// Ambos modulos nos permiten hacer peticiones ajax a una URL externa
// y modificar las cabeceras de esas peticiones
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
// Observable -> Nos permite recoger la información q nos devuelve
// el API REST, cuando hagamos una peticion.
import { Observable } from 'rxjs';


// utilizamos el decorador injectable sobre la clase
@Injectable()
export class PeticionesService{
	// Url del Api rest externo
	public url: string;

	// En el constructor, iyectar nuestro servicio Http, para hacer
	// peticiones ajax
	constructor(
		public _http: HttpClient

	){
		// Api rest externo, de prueba
		this.url = "https://reqres.in/";

	}

	// Metodo para sacar un usario de nuestra API
	// nos va a devolver un Observable de cualquier tipo
	// userId-> lo pasamos como parametro para elegir q 
	// usuario quiero cargar
	getUser(userId:any): Observable<any>{
		// Peticion a la URL con el httpClient a la ApiRest 
		// return this._http.get(this.url+'users/2'+ userId);
		return this._http.get(this.url+'api/users/'+ userId);
	}

	// METODO HTTP POST - AGREGAR UN USUARIO EN EL FORMULARIO
	addUser(user:any): Observable<any>{
		// Creamos un Json string, le pasamos el usuario
		let params = JSON.stringify(user);
		// cabeceras con HttpHeaders
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		// Peticion http post a la ApiRest
		return this._http.post(this.url+'api/users', params, {headers: headers});
	}



}