import { Component, OnInit } from '@angular/core';
// Importamos/Cargamos el servicio de Peticiones http en el componente Externo
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  // Cargar el PeticionesService en providers xq es un servicio
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

	// propiedades
	public user: any;
	public userId: any;
  // Pipes de fechas
  public fecha: any;

  // Nueva propiedad para el form Post 
  public new_user: any;
  // propiedad para relenar el dato del usuario
  public usuario_guardado: any;

  // Inyectamos en una propiedad/variable el servicio	
  constructor(
  	private _peticionesService: PeticionesService
  ) {
  	// Inicializamos la propiedad 
  	this.userId = 2;
    // Rellenamos en un objeto json la propiedad como indica el apirest
    this.new_user = {
      "name": "",
      "job": ""
    };
  }

  ngOnInit(): void {

    this.fecha = new Date(2022, 5, 8);

  	// Cargamos el metodo
  	this.cargaUsuario();
  }

  // Metodo para el
  cargaUsuario(){
  	// Para que salga el efecto de carga.. 
  	this.user = false;
  	// Utilizamos el metodo del PeticionesService getUser()

  	// subscribe -> metodo q tiene el observable por defecto,
  	// para recoger el resultado de la petición Ajax 
  	// Posee 2 functions de callback, uno recoge el resultado y 
  	// otro el error
  	this._peticionesService.getUser(this.userId).subscribe(
  		result => {
  			// data es donde está el objeto con datos del API
  			this.user = result.data;
		},
  		error => {
  			console.log(<any>error);
  		}
  	);
  }

  onSubmit(form:any){
    // Llamamos al metodo addUser desde el servicio peticiones
    this._peticionesService.addUser(this.new_user).subscribe(
      result =>{
        // dar un valor a la propiedad usuario_guardado
        this.usuario_guardado = result;

        console.log(result);

        form.reset();
     },
      error => {
        console.log(<any>error)
      }
    );
  }

}
