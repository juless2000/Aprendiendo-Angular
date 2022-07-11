export class Zapatilla{
	/* Creacion de modelos método 1
	public nombre: string;
	public marca: string;
	public color: string;
	public precio: number;
	public stock: boolean;

	constructor(nombre, marca, color, precio, stock){
		this.nombre = nombre;
		this.marca = marca;
		this.color = color;
		this.precio = precio;
		this.stock = stock;
	}
	*/
	
	// Metodo 2, mucho mas corto y tiene la misma funcionalidad
	constructor(
		public nombre: string,
		public marca: string,
		public color: string,
		public precio: number,
		public stock: boolean
	){}

}