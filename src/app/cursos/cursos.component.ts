import { Component, OnInit } from '@angular/core';
// Importamos componentes del router
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
// OnInit -> Es una interface por eso se implementa
export class CursosComponent implements OnInit {
	// propiedades
	public nombre: string;
	public followers: number;

  constructor(
  	// Inyectamos las propiedades
  	private _route: ActivatedRoute,
  	private _router: Router
  ) {
  	// Inicializar variables
  	this.nombre = '';
  	this.followers = 0;
  }

// Metodo que se ejecuta al cargar el componente despues del constructor
  ngOnInit(): void {
  	// Recoger los paramteros por la URL
  	// subscribe -> Recoger el parametro
  	// params -> tengo todos los valores q le esta pasando por la url
  	// +params.followers -> el simbolo + lo convierte en number
  	this._route.params.subscribe((params: Params) =>{
  		// Recoger el nombre y followers del valor/parametro 
  		this.nombre = params['nombre'];
  		this.followers = +params['followers'];
  		// Si le pasas como parametro 'ninguno' en el nombre, que te
  		// redirija a la pagina home
  		if(this.nombre == "ninguno"){
  			this._router.navigate(['/home']);
  		}
  		// this.nombre = params['nombre'];
  		console.log(this.nombre);
  	});
  }

  // Redirecciones con el router navigate
  redirigir(){
  	// navigate -> Te permite llevar a cuakquier ruta de mi proyecto
  	this._router.navigate(['/zapatillas']);
  }

}
