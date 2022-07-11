import { Component, OnInit } from '@angular/core';
// importamos el modelo de ContactoUsuario en el componente
import { ContactoUsuario } from '../models/contacto.usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

	// Definir el modelo en la propiedad
	public contacto_usuario: ContactoUsuario;

  constructor() {
  	// Inicializamos la propiedad
  	this.contacto_usuario = new ContactoUsuario('', '', '', '')
  }

  ngOnInit(): void {
  }

  // Metodo OnSubmit
  onSubmit(form:any){
  	// Resetear y poner a null los datos del formulario
  	// form.reset();
  	console.log("Evento submit lanzado");
  	console.log(this.contacto_usuario)
  }


}
