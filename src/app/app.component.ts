// Importamos el modulo Component e indicamos el paquete 
// que se guarda en el package.json
import { Component } from '@angular/core';
// Importamos la variable configuracion del models/configuracion.ts
import { configuracion } from './models/configuracion';

// Decorador -> Configurar mi componente
@Component({
	// selector-> Podemos indicar en que etiqueta o directiva de la 
	// pagina se va a estar cargando el componente
  selector: 'app-root',
  	// templateUrl -> Indica cual es la vista del componente
  templateUrl: './app.component.html',
  	// styleUrls -> Permite adjuntar unos estilos css al componente
  styleUrls: ['./app.component.css']
})
// Export para poder utilizar la clase en otros archivos
export class AppComponent {
	// El title que aparece en la clase de componente
  public title = 'Master de JavaScript y Angular';

  // Creamos una propiedad y metodo para dar un ejemplo al evento OnDestroy
  public mostrar_videojuegos: boolean = true;

  public descripcion: string;
  public config;

  constructor(){
    // mete la configuracion.ts dentro de la variable
    this.config = configuracion; 
    // Accedemos a la variable titulo del model configuracion
    // Seteamos el valor del tittle del titulo del model 
    this.title = configuracion.titulo;
    // Seteamos el valor de descripcion del model configuracion
    this.descripcion = configuracion.descripcion; 
  }

  // Ocultamos el componente de videojuegos
  ocultarVideojuegos(value: boolean) {
  	// this hace referencia a la clase
  	this.mostrar_videojuegos = value;
  }
}
