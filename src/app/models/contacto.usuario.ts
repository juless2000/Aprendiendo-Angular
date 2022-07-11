/* Modelo con los datos necesarios para el formulario de contacto*/
export class ContactoUsuario{
	// Propiedades de la clase ContactoUsuario
	constructor(
		public nombre: string,
		public apellidos: string,
		public email: string,
		public mensaje: string
	){

	}
}