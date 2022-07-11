/* 
app.routing.ts -> Incluirá toda la configuración de rutas de 
la aplicación de angular, y dará de alta las nuevas URL
de la aplicación
*/


// IMPORTAR MODULOS DEL ROUTER DE ANGULAR
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// IMPORTAR LOS COMPONENTES
import { HomeComponent } from './home/home.component'
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';

// ARRAY DE CONFIGURACION DE LAS RUTAS

// path -> Qué ruta van a dar de alta, como se va a llamar en el navegador
// component -> El componente que va a cargar cuando se ejecute esa ruta en el navegador
// Ruta 404 -> path:**, cuando la ruta no encuentre ningun 
// componente, se ejecutara un error 404. Siempre ponerlo al final
const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'zapatillas', component: ZapatillasComponent},
	{path: 'videojuego', component: VideojuegoComponent},
	// Incluimos parametros en nuestra ruta de cursos
	// parametro de apellidos es opcional
	{path: 'cursos', component: CursosComponent},
	{path: 'cursos/:nombre/:followers', component: CursosComponent},
	{path: 'externo', component: ExternoComponent},
	{path: 'contacto', component: ContactoComponent},
	{path: '**', component: HomeComponent}
];

// EXPORTAR EL MODULO DEL ROUTER
// appRoutingProviders -> Es el servicio del routing
// Exportamos el servicio y el modulo
// forRoot -> metodo para cargar las configuraciones y dar d alta en el routing
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
