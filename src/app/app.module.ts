// Se importan los dos objetos q se encargan de hacer el module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Para utilizar el NGMODEL, tenemos q importar el formsModule
import { FormsModule } from '@angular/forms';
// Importamos el modulo de rutas
// routing -> modulo ||| appRoutingProviders -> servicio
import { routing, appRoutingProviders } from './app.routing';
// Importamos el HttpClient para realizar peticiones 
import { HttpClientModule } from '@angular/common/http';


// Importamos el componente
import { AppComponent } from './app.component';
// Importamos los componentes creados en el modulo principal
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';

// Importamos nuestra Pipe personalizada
import { CalculadoraPipe } from './pipes/calculadora.pipe';
import { ContactoComponent } from './contacto/contacto.component';

// @NgModule -> Decorador q nos permite configurar el modulo
@NgModule({
  // Nos sirve para cargar nuestros components,	pipes o directivas
  // Cargamos el component Videojuego
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe,
    ContactoComponent
  ],
  // Cargar modulos que tiene el propio framework de angular, externos
  // o que hayamos creado nosotros, por ejemplo el FormsModule
  imports: [
    BrowserModule,
    FormsModule,
    // como es modulo se carga en imports
    routing,
    HttpClientModule
  ],
  // Nos sirve para cargar servicios
  providers: [
    appRoutingProviders
  ],
  // Sirve al Modulo/componente principal que se vaa cargar
  bootstrap: [AppComponent]
})
// Exportar el modulo
export class AppModule { }
